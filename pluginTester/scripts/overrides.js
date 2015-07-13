/**
 * Created by Daniel on 5/23/2015.
 */
logger = console;
pluginAPI.init(window.siteConfig.appId, 0, 1, 0);

pluginAPI.datastore.onUpdate(function(updateObj){

    var widgetIFrame = document.getElementById('widget');
    if(typeof(widgetIFrame) != 'object' || widgetIFrame.tagName !='IFRAME')
        console.error('cant find widget iframe');
    else{
        var packet = new Packet(null,'datastore.triggerOnUpdated',updateObj.detail);

        pluginAPI.sendMessage( widgetIFrame.contentWindow ,packet);
    }

});

pluginAPI.appearance= {
    getCSSFiles:function(data, callback){
        callback(null,['/styles/bootstrap.css']);
    }
};


pluginAPI.analytics.trackAction = function(actionName, metadata) {
  console.log('analytics mock track action [' + actionName + ']', metadata);
};

pluginAPI.analytics.trackView = function(viewName, metadata) {
    console.log('analytics mock track view [' + viewName + ']', metadata);
};