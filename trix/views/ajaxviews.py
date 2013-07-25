from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404
from trix.models import Status, Exercise, Topic, ExerciseStatus, PeriodExercise, PeriodGroup

@login_required
def exercisestatus(request, exercise=-1):
    """
    Sets the status for an exercise.
    This is made for AJAX
    """
    exc = get_object_or_404(PeriodExercise, pk=exercise)
    
    status = None
    if request.POST['status'] != "-1":
        status = get_object_or_404(Status, pk=request.POST['status'])

    if status is not None and not status.active:
        raise Http404

    exc_status = None
    try:
        exc_status = exc.student_results.get(student=request.user)
    except ExerciseStatus.DoesNotExist:
        if status is not None:
            exc_status = ExerciseStatus(exercise=exc,
                                        student=request.user, status=status)

    if status is None:
        if exc_status is not None:
            exc_status.delete()
        points = get_level(get_points(request.user))
        return HttpResponse("%d, %d, %d, %d, %d, %d"
                            % (-1, points['level'], points['percentage'],
                                points['points_on_level'],
                                points['level_points'],
                                points['total_points']),
                            mimetype="text/plain")

    exc_status.status = status
    exc_status.full_clean()
    exc_status.save()
    points = get_level(get_points(request.user))
    return HttpResponse("%d, %d, %d, %d, %d, %d" % (exc_status.status.id,
                                                    points['level'],
                                                    points['percentage'],
                                                    points['points_on_level'],
                                                    points['level_points'],
                                                    points['total_points']),
                        mimetype="text/plain")
