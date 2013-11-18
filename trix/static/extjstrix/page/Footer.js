Ext.define('trix.page.Footer', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.trixfooter',
    componentCls: 'trixfooter',
    border: false,
    margins: '0 0 0 0',
    height: 25,

    html: [
        '<div class="footer">',
        ////'   <a href="http://devilry.org">Devilry</a> is an open source general purpose delivery system. Visit <a class="projectlink" href="http://devilry.org">http://devilry.org</a> and help us make it better.<br />',
        ////'   Fugue key icon by <a href="http://p.yusukekamiyamane.com/">Yusuke Kamiyamane</a>.',
            'Trix is opensource. <a href="https://github.com/devilry/trix">Click here</a> for more info.',
        '</div>'
    ].join('')
});
