define({ 

 //Type your controller code here 
  onNavigate:function(param)
  {
    if(kony.store.getItem("PushNotifications") === "ON") {
      this.view.switchPushNotifications.selectedIndex = 0;
    } else {
      this.view.switchPushNotifications.selectedIndex = 1;
    }
    
  	this.view.switchPushNotifications.onSlide = this.togglePushNotification;
  },
  togglePushNotification:function() {
    kony.print("switch status: "+this.view.switchPushNotifications.selectedIndex);
    var pushNotificationsStatus = this.view.switchPushNotifications.selectedIndex;
    if(pushNotificationsStatus === 1) {
      kony.print("going to deregister push");
      deregisterPush();
    } else {
      kony.print("going to register push");
      registerPush();
    }
  }
 });