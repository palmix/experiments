(function(){var self = this;var _rs360_ = {};with(this){with(_rs360_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){
  
  __rsu._object('Easing',this,self,Easing,Easing$object);function Easing(){return __rsu._construct(this,'Easing',Easing$class,arguments.callee,arguments);};function Easing$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function Easing$object$ctor(){
    /*
      Easing Equations v1.5
      May 1, 2003
      (c) 2003 Robert Penner, all rights reserved.
      This work is subject to the terms in http://www.robertpenner.com/easing_terms_of_use.html.
    
      These tweening functions provide different flavors of
      math-based motion under a consistent API.
    
      Types of easing:
    
        Linear
        Quadratic
        Cubic
        Quartic
        Quintic
        Sinusoidal
        Exponential
        Circular
        Elastic
        Back
        Bounce
    
      Changes:
      1.5 - added bounce easing
      1.4 - added elastic and back easing
      1.3 - tweaked the exponential easing functions to make endpoints exact
      1.2 - inline optimizations (changing t and multiplying in one step)--thanks to Tatsuo Kato for the idea
    
      Discussed in Chapter 7 of
      Robert Penner's Programming Macromedia Flash MX
      (including graphs of the easing equations)
    
      http://www.robertpenner.com/profmx
      http://www.amazon.com/exec/obidos/ASIN/0072223561/robertpennerc-20
    */
    
    
    /* simple linear tweening - no easing*/
    /* t: current time, b: beginning value, c: change in value, d: duration*/
    __rsu._method('linearTween',this,self,false,function(t, b, c, d){return ( c*t/d + b )});
    
    
    /*/////////// QUADRATIC EASING: t^2 ///////////////////*/
    
    /* quadratic easing in - accelerating from zero velocity*/
    /* t: current time, b: beginning value, c: change in value, d: duration*/
    /* t and d can be in frames or seconds/milliseconds*/
    __rsu._method('easeInQuad',this,self,false,function(t, b, c, d){return ( c*(t/=d)*t + b )});
    
    /* quadratic easing out - decelerating to zero velocity*/
    __rsu._method('easeOutQuad',this,self,false,function(t, b, c, d){return ( -c *(t/=d)*(t-2) + b )});
    
    /* quadratic easing in/out - acceleration until halfway, then deceleration*/
    __rsu._method('easeInOutQuad',this,self,false,function(t, b, c, d){
      if ((t/=d/2) < 1) return c/2*t*t + b;
      return -c/2 * ((--t)*(t-2) - 1) + b;
    });
    
    
    /*/////////// CUBIC EASING: t^3 ///////////////////////*/
    
    /* cubic easing in - accelerating from zero velocity*/
    /* t: current time, b: beginning value, c: change in value, d: duration*/
    /* t and d can be frames or seconds/milliseconds*/
    __rsu._method('easeInCubic',this,self,false,function(t, b, c, d){return ( c*(t/=d)*t*t + b )});
    
    /* cubic easing out - decelerating to zero velocity*/
    __rsu._method('easeOutCubic',this,self,false,function(t, b, c, d){return ( c*((t=t/d-1)*t*t + 1) + b )});
    
    /* cubic easing in/out - acceleration until halfway, then deceleration*/
    __rsu._method('easeInOutCubic',this,self,false,function(t, b, c, d){
      if ((t/=d/2) < 1) return c/2*t*t*t + b;
      return c/2*((t-=2)*t*t + 2) + b;
    });
    
    
    /*/////////// QUARTIC EASING: t^4 /////////////////////*/
    
    /* quartic easing in - accelerating from zero velocity*/
    /* t: current time, b: beginning value, c: change in value, d: duration*/
    /* t and d can be frames or seconds/milliseconds*/
    __rsu._method('easeInQuart',this,self,false,function(t, b, c, d){return ( c*(t/=d)*t*t*t + b )});
    
    /* quartic easing out - decelerating to zero velocity*/
    __rsu._method('easeOutQuart',this,self,false,function(t, b, c, d){return ( -c * ((t=t/d-1)*t*t*t - 1) + b )});
    
    /* quartic easing in/out - acceleration until halfway, then deceleration*/
    __rsu._method('easeInOutQuart',this,self,false,function(t, b, c, d){
      if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
      return -c/2 * ((t-=2)*t*t*t - 2) + b;
    });
    
    
    /*/////////// QUINTIC EASING: t^5  ////////////////////*/
    
    /* quintic easing in - accelerating from zero velocity*/
    /* t: current time, b: beginning value, c: change in value, d: duration*/
    /* t and d can be frames or seconds/milliseconds*/
    __rsu._method('easeInQuint',this,self,false,function(t, b, c, d){return ( c*(t/=d)*t*t*t*t + b )});
    
    /* quintic easing out - decelerating to zero velocity*/
    __rsu._method('easeOutQuint',this,self,false,function(t, b, c, d){return ( c*((t=t/d-1)*t*t*t*t + 1) + b )});
    
    /* quintic easing in/out - acceleration until halfway, then deceleration*/
    __rsu._method('easeInOutQuint',this,self,false,function(t, b, c, d){
      if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
      return c/2*((t-=2)*t*t*t*t + 2) + b;
    });
    
    
    /*/////////// SINUSOIDAL EASING: sin(t) ///////////////*/
    
    /* sinusoidal easing in - accelerating from zero velocity*/
    /* t: current time, b: beginning value, c: change in position, d: duration*/
    __rsu._method('easeInSine',this,self,false,function(t, b, c, d){return ( -c * Math.cos(t/d * (Math.PI/2)) + c + b )});
    
    /* sinusoidal easing out - decelerating to zero velocity*/
    __rsu._method('easeOutSine',this,self,false,function(t, b, c, d){return ( c * Math.sin(t/d * (Math.PI/2)) + b )});
    
    /* sinusoidal easing in/out - accelerating until halfway, then decelerating*/
    __rsu._method('easeInOutSine',this,self,false,function(t, b, c, d){return ( -c/2 * (Math.cos(Math.PI*t/d) - 1) + b )});
    
    
    /*/////////// EXPONENTIAL EASING: 2^t /////////////////*/
    
    /* exponential easing in - accelerating from zero velocity*/
    /* t: current time, b: beginning value, c: change in position, d: duration*/
    __rsu._method('easeInExpo',this,self,false,function(t, b, c, d){return ( (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b )});
    
    /* exponential easing out - decelerating to zero velocity*/
    __rsu._method('easeOutExpo',this,self,false,function(t, b, c, d){return ( (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b )});
    
    /* exponential easing in/out - accelerating until halfway, then decelerating*/
    __rsu._method('easeInOutExpo',this,self,false,function(t, b, c, d){
      if (t==0) return b;
      if (t==d) return b+c;
      if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
      return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    });
    
    
    /*///////// CIRCULAR EASING: sqrt(1-t^2) //////////////*/
    
    /* circular easing in - accelerating from zero velocity*/
    /* t: current time, b: beginning value, c: change in position, d: duration*/
    __rsu._method('easeInCirc',this,self,false,function(t, b, c, d){return ( -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b )});
    
    /* circular easing out - decelerating to zero velocity*/
    __rsu._method('easeOutCirc',this,self,false,function(t, b, c, d){return ( c * Math.sqrt(1 - (t=t/d-1)*t) + b )});
    
    /* circular easing in/out - acceleration until halfway, then deceleration*/
    __rsu._method('easeInOutCirc',this,self,false,function(t, b, c, d){
      if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
      return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    });
    
    
    /*///////// ELASTIC EASING: exponentially decaying sine wave  //////////////*/
    
    /* t: current time, b: beginning value, c: change in value, d: duration, a: amplitude (optional), p: period (optional)*/
    /* t and d can be in frames or seconds/milliseconds*/
    
    __rsu._method('easeInElastic',this,self,false,function(t, b, c, d, a, p){
      if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
      if (a < Math.abs(c)) { a=c; var s=p/4; }
      else var s = p/(2*Math.PI) * Math.asin (c/a);
      return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    });
    
    __rsu._method('easeOutElastic',this,self,false,function(t, b, c, d, a, p){
      if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
      if (a < Math.abs(c)) { a=c; var s=p/4; }
      else var s = p/(2*Math.PI) * Math.asin (c/a);
      return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    });
    
    __rsu._method('easeInOutElastic',this,self,false,function(t, b, c, d, a, p){
      if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
      if (a < Math.abs(c)) { a=c; var s=p/4; }
      else var s = p/(2*Math.PI) * Math.asin (c/a);
      if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
      return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
    });
    
    
    /*///////// BACK EASING: overshooting cubic easing: (s+1)*t^3 - s*t^2  //////////////*/
    
    /* back easing in - backtracking slightly, then reversing direction and moving to target*/
    /* t: current time, b: beginning value, c: change in value, d: duration, s: overshoot amount (optional)*/
    /* t and d can be in frames or seconds/milliseconds*/
    /* s controls the amount of overshoot: higher s means greater overshoot*/
    /* s has a default value of 1.70158, which produces an overshoot of 10 percent*/
    /* s==0 produces cubic easing with no overshoot*/
    __rsu._method('easeInBack',this,self,false,function(t, b, c, d, s){
      if (s == undefined) s = 1.70158;
      return c*(t/=d)*t*((s+1)*t - s) + b;
    });
    
    /* back easing out - moving towards target, overshooting it slightly, then reversing and coming back to target*/
    __rsu._method('easeOutBack',this,self,false,function(t, b, c, d, s){
      if (s == undefined) s = 1.70158;
      return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    });
    
    /* back easing in/out - backtracking slightly, then reversing direction and moving to target,*/
    /* then overshooting target, reversing, and finally coming back to target*/
    __rsu._method('easeInOutBack',this,self,false,function(t, b, c, d, s){
      if (s == undefined) s = 1.70158;
      if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
      return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    });
    
    
    /*///////// BOUNCE EASING: exponentially decaying parabolic bounce  //////////////*/
    
    /* bounce easing in*/
    /* t: current time, b: beginning value, c: change in position, d: duration*/
    __rsu._method('easeInBounce',this,self,false,function(t, b, c, d){return ( c - easeOutBounce (d-t, 0, c, d) + b )});
    
    /* bounce easing out*/
    __rsu._method('easeOutBounce',this,self,false,function(t, b, c, d){
      if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
      } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
      } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
      } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
      }
    });
    
    /* bounce easing in/out*/
    __rsu._method('easeInOutBounce',this,self,false,function(t, b, c, d){
      if (t < d/2) return easeInBounce (t*2, 0, c, d) * .5 + b;
      return easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
    });
  
  }).apply(this,[])}}
  
  __rsu._object('AnimationTools',this,self,AnimationTools,AnimationTools$object);function AnimationTools(){return __rsu._construct(this,'AnimationTools',AnimationTools$class,arguments.callee,arguments);};function AnimationTools$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function AnimationTools$object$ctor(){
    __rsu._method('get',this,self,false,function(items){
      if(items.constructor == String)
        return document.getElementById(items);
    
      var result					= [];
      for(var i=0;i<items.length;i++){
        result.push(document.getElementById(items[i]));
      }
      return result;
    });
  
    __rsu._method('now',this,self,false,function(){return ( new Date().getTime() )});
  
    __rsu._method('merge',this,self,false,function(a,b){
      for(var property in b){
        if(a[property])
          continue;
        a[property] = b[property];
      }
      return a;
    });
    
    /*Take a value that is between start and end, and convert it to a value between 0 and 1*/
    __rsu._method('normalize',this,self,false,function(start, end, position){return ( AnimationTools.clamp(0,1, ((position - start)/(end - start)) ) )});
    
    /*Take a value between 0 and 1 and extrapolate the position it represents between start and end*/
    __rsu._method('denormalize',this,self,false,function(start, end, normal){return ( AnimationTools.clamp(start,end, (start+((end - start) * normal)) ) )});
    
    __rsu._method('clamp',this,self,false,function(a,b,value){
      return (a < b)? Math.min(b,Math.max(a,value)):
                      Math.min(a,Math.max(b,value));
    });
    __rsu._method('roundToXPlaces',this,self,false,function(number, places){
      var multiplier = Math.pow(10,places);
      return Math.round(number*multiplier)/multiplier;
    });
  }).apply(this,[])}}
  
  __rsu._class('AnimationManager',this,self,AnimationManager,AnimationManager$class);function AnimationManager(){return __rsu._construct(this,'AnimationManager',AnimationManager$class,arguments.callee,arguments);};function AnimationManager$class(timerResolution){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function AnimationManager$ctor(){
    var animationQueue = {}
    var timerHandle = -1
    var animationId = 0
    
    __rsu._method('start',this,self,false,function(settings){
      
      var animation = AnimationTools.merge(settings,{
        elements:[],
        functions:[],
        animation:null,
        duration:5,
        properties:{},
        easing:Easing.linearTween,
        complete:(function(){}),
        update:(function(){}),
        position:0,
        start:AnimationTools.now(),
        end:-1,
        name:"UnnamedAnimation"+(animationId++),
        paused:false
      });
    
      if(self.isActive(animation.name))
        return;
    
      /*Required parameters*/
      if(animation.animation == null){
        AnimationTools.alert("The animation parameter must be specified");
        return;
      }
      if(animation.elements == null){
        AnimationTools.alert("The elements parameter must be specified");
        return;
      }
    
      /*Allow single elements to be passed*/
      if(animation.elements.constructor != Array){
        animation.elements = [animation.elements];
      }
    
      /*Don't allow empty lists*/
      if(animation.elements.length == 0){
        AnimationTools.alert("The elements parameter must not be empty");
        return;
      }
    
      /*Prepare our properties*/
      animation.end = animation.start + animation.duration*1000;
    
      /*Build our animation functions*/
      for(var i=0;i<animation.elements.length;i++){
        var element = animation.elements[i];
        animation.functions.push(animation.animation(animation.properties,element));
      }
    
      /*Queue up our animation*/
      animationQueue[animation.name]	= animation;
    
      /*Start animating*/
      startTimer();
    });
    __rsu._method('startTimer',this,self,false,function(){
      /*Start timer updates if it isn't running*/
      if(timerHandle == -1)
        timerHandle = setInterval(function(){onUpdateAnimation()},timerResolution);
    });
    __rsu._method('pause',this,self,false,function(name){
      var animation = animationQueue[name];
      if(!animation)
        return;
      animation.paused = true;
    });
    __rsu._method('resume',this,self,false,function(name){
      var animation = animationQueue[name];
      if(!animation)
        return;
    
      /*Perform time fixup*/
      fixupTime(animation);
    
      /*Mark as playing*/
      animation.paused = false;
    
      /*Ensure that the timer is running*/
      startTimer();
    });
    __rsu._method('seek',this,self,false,function(name,position){
      var animation = animationQueue[name];
      if(!animation)
        return;
    
      /*Seek*/
      updateAnimation(animation,AnimationTools.clamp(0,1,position));
    
      /*Perform time fixup*/
      fixupTime(animation);
    
      /*Ensure that the timer is running*/
      startTimer();
    });
    function fixupTime(animation){
      /*Translate the time values to match now, and change the flag to unpaused*/
      var duration      = animation.end - animation.start;
      var offset        = duration*animation.position;
      animation.start   = AnimationTools.now() - offset;
      animation.end     = animation.start + duration;
    }
    __rsu._method('stop',this,self,false,function(name){
      delete animationQueue[name];
    });
    __rsu._method('isActive',this,self,false,function(name){
      var animation = animationQueue[name];
      return animation != null;
    });
    __rsu._method('isPaused',this,self,false,function(name){
      var animation = animationQueue[name];
      return animation != null && animation.paused;
    });
    __rsu._method('isPlaying',this,self,false,function(name,currentTime){
      var animation = animationQueue[name];
      return animation != null &&
          !animation.paused &&
          (currentTime == null || currentTime < animation.end);
    });
    function onUpdateAnimation(){
      var hasActiveAnimations = false;
      var currentTime = AnimationTools.now();
    
      for(var name in animationQueue){
        var animation = animationQueue[name];
    
        /*Skip paused animations*/
        if(animation.paused)
          continue;
    
        /*Skip animations that haven't started yet, but keep the timer alive*/
        if(currentTime < animation.start){
          hasActiveAnimations = true;
          continue;
        }
    
        /*Update our non paused animations before we check to remove them*/
        /*	this will ensure that they finish animating all the way to 100%*/
    
        /*Calculate a value between 0 and 1 based on the time elapsed between the start and end*/
        updateAnimation(animation,AnimationTools.normalize(animation.start, animation.end, currentTime));
    
        /*Remove the animation if it is no longer playing*/
        if(!self.isPlaying(name,currentTime)){
          /*If we have a complete event, queue it to run later*/
          /*	(fixes problems with effects starting in the complete handler*/
          /*	just as the timer is being killed due to lack of work)*/
          if(animation.complete!=null)
            setTimeout(animation.complete,10);
          delete animationQueue[name];
          continue;
        }
    
        /*The animation was active, keep the timer alive*/
        hasActiveAnimations = true;
      }
    
      /*Stop updates for the time being*/
      if(!hasActiveAnimations && timerHandle!=-1){
        clearInterval(timerHandle);
        timerHandle = -1;
      }
    }
    function updateAnimation(animation,position){
      var easing = animation.easing(position,0,1,1);
      /*
      var duration				= animation.end - animation.start;
      var easing					= animation.easing(duration*position,0,1,duration);
      */
    
      animation.position = position;
      for(var i=0;i<animation.functions.length;i++){
        animation.functions[i](easing);
      }
      animation.update(animation);
    }
  }).apply(this,[])}}

}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs760_ = {};with(this){with(_rs760_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._import('rescripted.collections',rescripted.collections,'_',_rs760_)
__rsu._import('rescripted.xml',rescripted.xml,'_',_rs760_)
__rsu._import('rescripted.ui',rescripted.ui,'_',_rs760_)

__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){

  __rsu._class('Box',this,self,Box,Box$class);function Box(){return __rsu._construct(this,'Box',Box$class,arguments.callee,arguments);};function Box$class(settings,boxType){var self = __rsu._self(this);var base = __rsu._extend(this,self,Container,Container$class,[settings]);with(self){(function Box$ctor(){
    __rsu._abstractMethod('cells',this,self);  
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:(boxType+" container")}],[(XmlElement("table",[{name:"cellpadding",value:("0")},{name:"cellspacing",value:("0")},{name:"class",value:('ui-table '+boxType+'-ui-table')}],[(XmlElement("tbody",[],[XmlJavascriptFragment(self.cells())]))]))]))
    });
  }).apply(this,[])}}
  
  __rsu._class('VBox',this,self,VBox,VBox$class);function VBox(){return __rsu._construct(this,'VBox',VBox$class,arguments.callee,arguments);};function VBox$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Box,Box$class,[settings,'vbox']);with(self){(function VBox$ctor(){
    __rsu._method('cells',this,self,false,function(){
      var index = 0
      return from(self.children).map(function(child){return (XmlElement("tr",[{name:"class",value:((index % 2 == 0?"even":"odd")+" child"+(index++))}],[XmlText("\n          "),(XmlElement("td",[{name:"class",value:("vbox-cell")}],[XmlJavascriptFragment(child)])),XmlText("\n        ")]))})
    });
  }).apply(this,[])}}
  
  __rsu._class('HBox',this,self,HBox,HBox$class);function HBox(){return __rsu._construct(this,'HBox',HBox$class,arguments.callee,arguments);};function HBox$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Box,Box$class,[settings,'hbox']);with(self){(function HBox$ctor(){
    __rsu._method('cells',this,self,false,function(){
      return (XmlElement("tr",[],[XmlText("\n        "),XmlJavascriptFragment(
          from(self.children).map(function(child){return (XmlElement("td",[{name:"class",value:("hbox-cell")}],[XmlJavascriptFragment(child)]))})
        ),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
  
}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs270_ = {};with(this){with(_rs270_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._import('rescripted.collections',rescripted.collections,'_',_rs270_)
__rsu._import('rescripted.xml',rescripted.xml,'_',_rs270_)

__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){
  __rsu._class('PieChart',this,self,PieChart,PieChart$class);function PieChart(){return __rsu._construct(this,'PieChart',PieChart$class,arguments.callee,arguments);};function PieChart$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function PieChart$ctor(){
    var data = []
    
    __rsu._method('add',this,self,false,function(label,value){
      data.push({label:label,value:value})
      return self
    });
    
    function dataTable(){
      var table = new google.visualization.DataTable()
      table.addColumn('string', 'Key');
      table.addColumn('number', 'Value');
      table.addRows(data.length);
      for(var i=0;i<data.length;i++ ){
        table.setValue(i,0,data[i].label)
        table.setValue(i,1,data[i].value)
      }
      return table
    }
    
    function createChart(node){
      /*http://code.google.com/apis/visualization/documentation/gallery/piechart.html*/
      /*http://code.google.com/apis/visualization/documentation/gallery/imagepiechart.html*/
      return hasVectorSupport()? new google.visualization.PieChart(node):
                                 new google.visualization.ImagePieChart(node)
    }
    
    __rsu._method('render',this,self,true,function(){ return (XmlElement("div",[{name:"class",value:("chart pie-chart")}],[XmlJavascriptFragment(LoadingMessage())])) });
    
    domMeasured(function(node){ createChart(node).draw(dataTable(), self.settings) })
  }).apply(this,[])}}
  
  __rsu._class('LineChart',this,self,LineChart,LineChart$class);function LineChart(){return __rsu._construct(this,'LineChart',LineChart$class,arguments.callee,arguments);};function LineChart$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function LineChart$ctor(){
    var data = []
    
    __rsu._method('add',this,self,false,function(label,value){
      data.push({label:label,value:value})
      return self
    });
    
    function dataTable(){
      var table = new google.visualization.DataTable()
      
      /*h-axis*/
      table.addColumn('string', data[0].label);
      /*lines*/
      for(var i=1;i<data.length;i++)
        table.addColumn('number', data[i].label);
    
      table.addRows(data[0].value.length);
      /*data points*/
      for(var i=0;i<data.length;i++ ){
        var j=0
        from(data[i].value).foreach(function(dataPoint){
          table.setValue(j,i,dataPoint)
          j++
        })
      }
      return table
    }
    
    function createChart(node){
      /*http://code.google.com/apis/visualization/documentation/gallery/imagelinechart.html*/
      /*http://code.google.com/apis/visualization/documentation/gallery/linechart.html*/
      return hasVectorSupport()? new google.visualization.LineChart(node):
                                 new google.visualization.ImageLineChart(node)
    }
    
    __rsu._method('render',this,self,true,function(){ return (XmlElement("div",[{name:"class",value:("chart line-chart")}],[XmlJavascriptFragment(LoadingMessage())])) });
    
    domMeasured(function(node){ createChart(node).draw(dataTable(), self.settings) })
  }).apply(this,[])}}
  
  __rsu._class('BarChart',this,self,BarChart,BarChart$class);function BarChart(){return __rsu._construct(this,'BarChart',BarChart$class,arguments.callee,arguments);};function BarChart$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function BarChart$ctor(){
    var data = []
    
    __rsu._method('add',this,self,false,function(label,value){
      data.push({label:label,value:value})
      return self
    });
    
    function dataTable(){
      var table = new google.visualization.DataTable()
      
      /*h-axis*/
      table.addColumn('string', data[0].label);
      /*lines*/
      for(var i=1;i<data.length;i++)
        table.addColumn('number', data[i].label);
    
      table.addRows(data[0].value.length);
      /*data points*/
      for(var i=0;i<data.length;i++ ){
        var j=0
        from(data[i].value).foreach(function(dataPoint){
          table.setValue(j,i,dataPoint)
          j++
        })
      }
      return table
    }
    
    __rsu._method('currentSettings',this,self,false,function(){return settingsWithDefaults({isVertical:true,isStacked:false})});
    
    function createChart(node){
      /*http://code.google.com/apis/visualization/documentation/gallery/barchart.html*/
      /*http://code.google.com/apis/visualization/documentation/gallery/columnchart.html*/
      /*http://code.google.com/apis/visualization/documentation/gallery/imagebarchart.html*/
      var isVertical = currentSettings().isVertical
      return (!hasVectorSupport())? new google.visualization.ImageBarChart(node):
             ( isVertical        )? new google.visualization.ColumnChart(node):
                                    new google.visualization.BarChart(node)
                                 
    }
    
    __rsu._method('render',this,self,true,function(){ return (XmlElement("div",[{name:"class",value:("chart bar-chart")}],[XmlJavascriptFragment(LoadingMessage())])) });
    
    domMeasured(function(node){ createChart(node).draw(dataTable(), currentSettings()) })

  }).apply(this,[])}}
  
}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs810_ = {};with(this){with(_rs810_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._import('rescripted.collections',rescripted.collections,'_',_rs810_)
__rsu._import('rescripted.xml',rescripted.xml,'_',_rs810_)
__rsu._import('rescripted.ui',rescripted.ui,'_',_rs810_)

__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){
  
  $.fn.animate2 = function(css, speed, fn) {
        if(speed === 0) { /* differentiate 0 from null*/
          this.css(css)
          window.setTimeout(fn, 0)
        } else {
          if($.browser.safari) {
            var s = []
            for(var i in css) 
                s.push(i)
          
            this.css({ webkitTransitionProperty: s.join(", "),
                      webkitTransitionDuration: speed+ "ms" });
          
            window.setTimeout(function(x,y) {
              x.css(y)
            },0, this, css) /* have to wait for the above CSS to get applied*/
            window.setTimeout(fn, speed)
          } else {
            this.animate(css, speed, fn)
          }
        }
      }
  
  __rsu._class('Dialog',this,self,Dialog,Dialog$class);function Dialog(){return __rsu._construct(this,'Dialog',Dialog$class,arguments.callee,arguments);};function Dialog$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Container,Container$class,[settings]);with(self){(function Dialog$ctor(){
    var _controls = List()
    
    __rsu._method('controls',this,self,false,function(){
      _controls = List.fromArray(arguments).flatten()
      return self
    });
    
    __rsu._method('showIn',this,self,false,function(parent){
      self.appendTo(parent)
      setTimeout((function(){
          $("> .dialog-background",self.jquery()).animate2({opacity:0.8},250,(function(){}))
        $("> .dialog-body",self.jquery()).animate2({top:0},250,(function(){}))
      }),10)
      return self;
    });
    __rsu._method('close',this,self,false,function(){
      $("> .dialog-background",self.jquery()).animate2({opacity:0.0},250,(function(){}))
      $("> .dialog-body",self.jquery()).animate2({top:"-1000px"},250,(function(){
        self.jquery().remove()
      }))
    });
    
    __rsu._method('renderControls',this,self,false,function(){
      if(_controls.size() == 0) return null;
      return Container({classNames:"dialog-controls"})(_controls)
    });
    
    __rsu._method('render',this,self,true,function(){
      var title = self.settings.label? (XmlElement("div",[{name:"class",value:("dialog-title")}],[XmlJavascriptFragment(self.settings.label)])) : null
      var classNames = List("dialog","container",self.settings.label?"has-title":null,_controls.size() > 0?"has-controls":null).filter((function(_rs81141_){return (_rs81141_!=null)})).mkString(" ")
      return (XmlElement("div",[{name:"class",value:(classNames)}],[XmlText("\n          "),(XmlElement("div",[{name:"class",value:("dialog-background")}],[])),XmlText("\n          "),(XmlElement("div",[{name:"class",value:("dialog-body")}],[XmlText("\n            "),(XmlElement("div",[{name:"class",value:("dialog-contents")}],[XmlText("\n              "),XmlJavascriptFragment(title),XmlText("\n              "),(XmlElement("div",[{name:"class",value:("dialog-children")}],[XmlJavascriptFragment(self.children)])),XmlText("\n              "),XmlJavascriptFragment(renderControls()),XmlText("\n            ")])),XmlText("\n          ")])),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
   
  __rsu._class('Form',this,self,Form,Form$class);function Form(){return __rsu._construct(this,'Form',Form$class,arguments.callee,arguments);};function Form$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Container,Container$class,[settings]);with(self){(function Form$ctor(){
    __rsu._method('submit',this,self,false,function(action){
      self.onsubmit = action
      return self
    });
    
    function rows(){
      var index = 0;
      return from(self.children).map(function(child){
        var className = List('form-row',(index%2==0?'odd':'even'),'row'+(index++),(child.settings || {}).labelClass).filter((function(_rs81142_){return (_rs81142_!=null)})).mkString(" ")
        if(isInstanceOf(child,XmlNode) || child.settings.noLabel == true){
          return (XmlElement("tr",[{name:"class",value:(className)}],[XmlText("\n              "),(XmlElement("td",[{name:"colspan",value:("2")}],[XmlJavascriptFragment(child)])),XmlText("\n            ")]))
        }
        return (XmlElement("tr",[{name:"class",value:(className)}],[XmlText("\n            "),(XmlElement("td",[{name:"class",value:("form-label-cell")}],[(XmlElement("div",[{name:"class",value:("form-label")}],[(XmlElement("label",[{name:"for",value:(child.settings.formName)}],[XmlJavascriptFragment(child.settings.label)]))]))])),XmlText("\n            "),(XmlElement("td",[{name:"class",value:("form-value-cell")}],[(XmlElement("div",[{name:"class",value:("form-value")}],[XmlJavascriptFragment(child)]))])),XmlText("\n          ")]))
      })
    }
    
    __rsu._method('render',this,self,true,function(){return (XmlElement("div",[{name:"class",value:("form container")}],[XmlText("\n        "),(XmlElement("form",[{name:"action",value:(self.settings.url)},{name:"class",value:("form-element")},{name:"method",value:(self.settings.httpMethod)},{name:"name",value:(self.settings.formName)},{name:"onsubmit",value:(self.onsubmit)},{name:"target",value:(self.settings.formTarget)}],[XmlText("\n          \n          "),(XmlElement("table",[{name:"cellpadding",value:("0")},{name:"cellspacing",value:("0")},{name:"class",value:("ui-table")}],[XmlText("\n            "),(XmlElement("tbody",[],[XmlText("\n            "),XmlJavascriptFragment(rows()),XmlText("\n            ")])),XmlText("\n          ")])),XmlText("\n          \n        ")])),XmlText("\n      ")]))});
  }).apply(this,[])}}
  
  __rsu._class('FormGroup',this,self,FormGroup,FormGroup$class);function FormGroup(){return __rsu._construct(this,'FormGroup',FormGroup$class,arguments.callee,arguments);};function FormGroup$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Container,Container$class,[labelStringToSettings(settings)]);with(self){(function FormGroup$ctor(){
    __rsu._method('render',this,self,true,function(){return (XmlElement("div",[{name:"class",value:("form-group container")}],[XmlText("\n        "),XmlJavascriptFragment(self.settings.label? (XmlElement("h2",[],[XmlJavascriptFragment(self.settings.label)])):null),XmlText("\n        "),XmlJavascriptFragment(self.children),XmlText("\n      ")]))});
  }).apply(this,[])}}
  
}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs830_ = {};with(this){with(_rs830_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._import('rescripted.collections',rescripted.collections,'_',_rs830_)
__rsu._import('rescripted.xml',rescripted.xml,'_',_rs830_)
__rsu._import('rescripted.ui',rescripted.ui,'_',_rs830_)

__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){

  __rsu._class('BoundValue',this,self,BoundValue,BoundValue$class);function BoundValue(){return __rsu._construct(this,'BoundValue',BoundValue$class,arguments.callee,arguments);};function BoundValue$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function BoundValue$ctor(){
    self.change = Event(self)
    self.value = self.settings.value
    
    __rsu._method('apply',this,self,false,function(value){
      if(arguments.length == 1){
        self.value = value;
        self.change.invoke(self.value)
      }
      return self.value
    });
    
    __rsu._method('toXmlNode',this,self,true,function(){ return BoundValueReference(settings,self).toXmlNode() });
  }).apply(this,[])}}
  
  __rsu._class('BoundValueReference',this,self,BoundValueReference,BoundValueReference$class);function BoundValueReference(){return __rsu._construct(this,'BoundValueReference',BoundValueReference$class,arguments.callee,arguments);};function BoundValueReference$class(settings,bindable){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function BoundValueReference$ctor(){
    bindable.change(function(value){ render().appendChildrenTo(self.jquery().empty()) })
    __rsu._method('render',this,self,true,function(){ return (XmlElement("span",[{name:"class",value:("bound-value-reference")}],[XmlJavascriptFragment(bindable())])) });
  }).apply(this,[])}}
  
  __rsu._object('Formatters',this,self,Formatters,Formatters$object);function Formatters(){return __rsu._construct(this,'Formatters',Formatters$class,arguments.callee,arguments);};function Formatters$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function Formatters$object$ctor(){
    var startsWithHttp = new RegExp("^https?://","i")
    __rsu._method('http',this,self,false,function(value){
      if(value.replace(/\s*/g,"") == "") return value
      if(startsWithHttp.test(value)) return value;
      return "http://"+value
    });
  }).apply(this,[])}}
  
  __rsu._object('Validation',this,self,Validation,Validation$object);function Validation(){return __rsu._construct(this,'Validation',Validation$class,arguments.callee,arguments);};function Validation$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function Validation$object$ctor(){
    __rsu._method('lazyValue',this,self,false,(__rsu._partialFunction(
      function(f){return (isInstanceOf(f,Function))?function(){return ( f)}:null}
      ,function(v){return function(){return ( (function(){return ( v)})
    )}})));
    
    __rsu._method('greaterThan',this,self,false,function(min){
      min = lazyValue(min)
      return (function(value,label){
        var currentMin = min()
        return failIf(value <= currentMin,label+" must be greater than: "+currentMin)
      }) 
    });
    
    __rsu._method('lessThan',this,self,false,function(max){
      max = lazyValue(max)
      return (function(value,label){
        var currentMax = max()
        return failIf(value >= currentMax, label+" must be less than: "+currentMax) 
      })
    });
    
    __rsu._method('isEmail',this,self,false,function(value,label){ return failIf(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value) == false,label+" is not properly formatted ") });
    __rsu._method('isNumber',this,self,false,function(value,label){ return failIf(isNaN(parseFloat(value)),label+" must be a number") });
    __rsu._method('notEmpty',this,self,false,function(value,label){ return failIf(Option(value).map(function(_rs83454_){return (_rs83454_.toString().replace(/\s*/g,""))}).getOrElse("") == "",label+" must not be empty") });
    
    __rsu._method('failIf',this,self,false,function(value,message){ return value? Some(message):None });
    
  }).apply(this,[])}}
  
  __rsu._object('FormValidators',this,self,FormValidators,FormValidators$object);function FormValidators(){return __rsu._construct(this,'FormValidators',FormValidators$class,arguments.callee,arguments);};function FormValidators$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function FormValidators$object$ctor(){
    __rsu._method('process',this,self,false,function(input,args){
      if(args.exists(function(_rs83455_){return (_rs83455_ == null)}))
        error("arguments to the validate method must not be null")
      var validators = args.collect(__rsu._partialFunction( function(v){return (isInstanceOf(v,FormValidator))?function(){return ( v )}:null}))
      var validationFunctions = args.filter(function(arg){return ( !validators.contains(arg))})
      if(validationFunctions.collect(__rsu._partialFunction( function(f){return (isInstanceOf(f,Function) && (f.length == 2 ))?function(){return ( f)}:null})).size() != validationFunctions.size())
        error("validation functions must be two parameter functions")

      from(validators).foreach(function(validator){
        from(validationFunctions).foreach(function(func){
          validator.add({input:input,func:func})
        })
      })
    });
  }).apply(this,[])}}
  
  __rsu._class('FormValidator',this,self,FormValidator,FormValidator$class);function FormValidator(){return __rsu._construct(this,'FormValidator',FormValidator$class,arguments.callee,arguments);};function FormValidator$class(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function FormValidator$ctor(){
    var validators = List()
    __rsu._method('isValid',this,self,false,function(){ return validationErrors().size() == 0 });
    
    __rsu._method('validationErrors',this,self,false,function(){
      return from(validators).map(function(validator){
        if(typeOf(validator) == Function && validator.length == 0)
          return validator()
        else
          return validator.func(validator.input.value(),validator.input.settings.label || validator.input.componentId)
      }).flatten()
    });
    
    __rsu._method('add',this,self,false,function(item){ validators.append(item) });
  }).apply(this,[])}}
  
  __rsu._method('labelStringToSettings',this,self,false,(__rsu._partialFunction(
    function(label){return (isInstanceOf(label,XmlNode))?function(){return ( {label:label})}:null}
    ,function(label){return (isInstanceOf(label,String))?function(){return ( {label:label})}:null}
    ,function(other){return function(){return ( other
  )}})));
  
  __rsu._class('Label',this,self,Label,Label$class);function Label(){return __rsu._construct(this,'Label',Label$class,arguments.callee,arguments);};function Label$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[labelStringToSettings(settings)]);with(self){(function Label$ctor(){
    __rsu._method('text',this,self,false,function(value){ self.jquery().text(value);self.settings.label = value; });
    __rsu._method('render',this,self,true,function(){ return (XmlElement("span",[{name:"class",value:("label")}],[XmlJavascriptFragment(self.settings.label)])) });
  }).apply(this,[])}}
  
  __rsu._class('TextInput',this,self,TextInput,TextInput$class);function TextInput(){return __rsu._construct(this,'TextInput',TextInput$class,arguments.callee,arguments);};function TextInput$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function TextInput$ctor(){
    self.change = Event(self)
    self.keyup = Event(self)
    self.blur = Event(self)
    self.focus = Event(self)
    
    self.formatter = null
    
    __rsu._method('bindTo',this,self,false,function(){
      var binding = PropertyBinding.create(arguments)
      if(self.settings.defaultValue) binding(self.settings.defaultValue)
      else self.settings.defaultValue = binding()
      self.change.add(binding)
      return self;
    });
    
    blur(function(newValue){
      if(self.formatter)
        value( self.formatter(newValue) )
      
      if(shouldShowPrompt())
        jquery().addClass("show-prompt")
      else
        jquery().removeClass("show-prompt")
    })
    
    focus(function(newValue){
      jquery().removeClass("show-prompt")
    })
    
    __rsu._method('format',this,self,false,function(formatter){
      self.formatter = formatter
      return self;
    });
    
    __rsu._method('validate',this,self,false,function(){
      FormValidators.process(self,Seq.fromArray(arguments))
      return self
    });
    
    __rsu._method('value',this,self,false,function(){
    	if(arguments.length == 1)	self.jquery("input").val(arguments[0])
    	return Option(self.jquery("input").val()).getOrElse(self.settings.defaultValue)
    });
    
    __rsu._method('disabled',this,self,true,function(disable){
    	self.jquery("input").attr('disabled', disable);
    });
    
    function shouldShowPrompt(){
      var hasPrompt = (self.settings.prompt || "") != ""
      var hasValue = (value() || "") != ""
      return hasPrompt && !hasValue
    }
    
    __rsu._method('render',this,self,true,function(){return (XmlElement("span",[{name:"class",value:("text-input"+(shouldShowPrompt()?" show-prompt":""))}],[XmlText("\n        "),(XmlElement("span",[{name:"class",value:("text-input-prompt")}],[XmlJavascriptFragment(self.settings.prompt)])),XmlText("\n        "),(XmlElement("input",[{name:"disabled",value:(self.settings.disabled ? true : null)},{name:"name",value:(self.settings.formName)},{name:"onblur",value:(self.blur.valueHandler)},{name:"onchange",value:(self.change.valueHandler)},{name:"onfocus",value:(self.focus.valueHandler)},{name:"onkeyup",value:(self.keyup.valueHandler)},{name:"type",value:(self.settings.hideText ? "password" : "text")},{name:"value",value:(self.settings.defaultValue)}],[])),XmlText("\n      ")]))});
  }).apply(this,[])}}
  
  __rsu._class('TextArea',this,self,TextArea,TextArea$class);function TextArea(){return __rsu._construct(this,'TextArea',TextArea$class,arguments.callee,arguments);};function TextArea$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,TextInput,TextInput$class,[settings]);with(self){(function TextArea$ctor(){    
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:("text-area")}],[XmlText("\n          "),(XmlElement("textarea",[{name:"disabled",value:(self.settings.disabled ? true : null)},{name:"name",value:(self.settings.formName)},{name:"onblur",value:(self.blur.valueHandler)},{name:"onchange",value:(self.change.valueHandler)},{name:"onkeyup",value:(self.keyup.valueHandler)}],[XmlJavascriptFragment(self.settings.defaultValue)])),XmlText("\n        ")]))
    });
      
    __rsu._method('value',this,self,true,function(){
    	if(arguments.length == 1)	$(" > textarea", self.jquery()).val(arguments[0])
    	return $(" > textarea", self.jquery()).val()
    });
    
    __rsu._method('disabled',this,self,true,function(disable){
    	$("> textarea",self.jquery()).attr('disabled', disable);
    });
    
  }).apply(this,[])}}
  
  __rsu._class('HtmlArea',this,self,HtmlArea,HtmlArea$class);function HtmlArea(){return __rsu._construct(this,'HtmlArea',HtmlArea$class,arguments.callee,arguments);};function HtmlArea$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,TextInput,TextInput$class,[settings]);with(self){(function HtmlArea$ctor(){

    var editorId = self.componentId+"_htmleditor"
        
    self.domInserted(function(){
      self.editor = new tinymce.Editor(editorId, self.settings)
      self.editor.onInit.add(function(){ 
        self.editor.setContent(self.settings.defaultValue); 
        self.editor.onChange.add(function(){ self.change.invoke(self.editor.getContent())})
      })
      self.editor.render();
    })
    
    __rsu._method('value',this,self,true,function(){
    	if(arguments.length == 1) self.editor.setContent(arguments[0])
    	return self.editor.getContent()
    });
        
    __rsu._method('render',this,self,true,function(){ 
      if(isMobileBrowser())
        return (XmlElement("div",[],[XmlText("This functionality is not supported on this device.")])) 
      else
        return (XmlElement("div",[],[(XmlElement("textarea",[{name:"id",value:(editorId)},{name:"style",value:("width:100%")}],[]))])) 
    });
  }).apply(this,[])}}
  
  __rsu._class('CheckBox',this,self,CheckBox,CheckBox$class);function CheckBox(){return __rsu._construct(this,'CheckBox',CheckBox$class,arguments.callee,arguments);};function CheckBox$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function CheckBox$ctor(){
    self.change = Event(self)

    __rsu._method('bindTo',this,self,false,function(){
      var binding = PropertyBinding.create(arguments)
      if(self.settings.defaultValue) binding(self.settings.defaultValue)
      else self.settings.defaultValue = binding()
      self.change.add(binding)
      return self;
    });
    
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("input",[{name:"checked",value:((self.settings.defaultValue == true)?"true":null)},{name:"class",value:("checkbox")},{name:"name",value:(self.settings.formName)},{name:"onclick",value:((function(){ self.change.invoke(this.checked) }))},{name:"type",value:("checkbox")}],[]))
    });
  }).apply(this,[])}}
  
  __rsu._class('Button',this,self,Button,Button$class);function Button(){return __rsu._construct(this,'Button',Button$class,arguments.callee,arguments);};function Button$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function Button$ctor(){

    __rsu._method('click',this,self,false,function(action){
      self.onclick = action
      return self
    });
    
    __rsu._method('render',this,self,true,function(){
      /*don't add newlines between any elements, it breaks ie7...*/
      return (XmlElement("a",[{name:"class",value:( "button not-native "+  (self.settings.disabled ? "disabled" : "") )},{name:"href",value:("javascript:void(0);")},{name:"onclick",value:( self.settings.disabled ? (function(){return false}) : self.onclick )}],[(XmlElement("span",[{name:"class",value:("button-container")}],[(XmlElement("span",[{name:"class",value:("button-text")}],[XmlJavascriptFragment(self.settings.label)]))]))]))
    });
    
    __rsu._method('disabled',this,self,true,function(){
    	if(arguments.length != 1) return    		
     	if(arguments[0]){
    	  self.jquery().addClass("disabled")  
    	  self.jquery().unbind("click")
    	} else {
    	  self.jquery().removeClass("disabled")  
    	  self.jquery().click(self.onclick)    		
     	}
    });
    
  }).apply(this,[])}}
  
  __rsu._class('NativeButton',this,self,NativeButton,NativeButton$class);function NativeButton(){return __rsu._construct(this,'NativeButton',NativeButton$class,arguments.callee,arguments);};function NativeButton$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Button,Button$class,[settings]);with(self){(function NativeButton$ctor(){
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("input",[{name:"class",value:("button native")},{name:"onclick",value:(self.onclick)},{name:"type",value:("button")},{name:"value",value:(self.settings.label)}],[]))
    });
  }).apply(this,[])}}
  

  __rsu._class('ComboBox',this,self,ComboBox,ComboBox$class);function ComboBox(){return __rsu._construct(this,'ComboBox',ComboBox$class,arguments.callee,arguments);};function ComboBox$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function ComboBox$ctor(){
    self.data = List()
    __rsu._method('apply',this,self,false,function(){
      self.data = List.fromArray(arguments).flatten()
      return self
    });
    
    self.change = Event(self)
    
    function getFirstValue(){
      if(self.data.size() > 0){
        var option = self.data(0)
        if(typeOf(option) == String){
          return option
        } else {
          return ("label" in option)? (("value" in option)? option.value:""):option.toString();
        }
      }
      return null
    }
    
    __rsu._method('bindTo',this,self,false,function(){
      var binding = PropertyBinding.create(arguments)
      if(self.data.size() > 0){
        var firstValue = getFirstValue()
        var currentBoundValue = binding()
        if(self.settings.defaultValue) binding(self.settings.defaultValue)
        else self.settings.defaultValue = currentBoundValue || firstValue
        if(!currentBoundValue) binding(firstValue)
      }
      self.change.add(binding)
      return self;
    });

    __rsu._method('validate',this,self,false,function(){
      FormValidators.process(self,Seq.fromArray(arguments))
      return self
    });
    
    __rsu._method('value',this,self,false,function(){
    	if(arguments.length == 1) jquery().val(arguments[0])
    	return jquery().val()
    });
    
    __rsu._method('options',this,self,false,function(){
      self.settings.defaultValue = self.settings.defaultValue || getFirstValue()
      return from(self.data).map(function(option){
        var label = null
        var value = null
        if(typeOf(option) == String){
          label = option
          value = option
        } else {
          label = ("label" in option)? option.label : option.toString();
          value = ("label" in option)? (("value" in option)? option.value:""):option.toString();
        }
        var selected = (self.settings.defaultValue != null && value == self.settings.defaultValue)? true:null
        return ({label:label,value:value,selected:selected})
      })
    });
    
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("select",[{name:"name",value:(self.settings.formName)},{name:"onchange",value:(self.change.valueHandler)}],[XmlText("\n        "),XmlJavascriptFragment(
          from(self.options()).map(function(option){
            return (XmlElement("option",[{name:"selected",value:(option.selected)},{name:"value",value:(option.value)}],[XmlJavascriptFragment(option.label)]))
          })
        ),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
  
  __rsu._class('RadioGroup',this,self,RadioGroup,RadioGroup$class);function RadioGroup(){return __rsu._construct(this,'RadioGroup',RadioGroup$class,arguments.callee,arguments);};function RadioGroup$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,ComboBox,ComboBox$class,[settings]);with(self){(function RadioGroup$ctor(){
    var formName = self.settings.formName || ("radiogroup"+Component.nextId())
    __rsu._method('render',this,self,true,function(){
      var index = 0;
      return (XmlElement("div",[{name:"class",value:("radio-group")}],[XmlText("\n        "),XmlJavascriptFragment(
          from(self.options()).map(function(option){
            var id = self.componentId+"_radioButtonId"+(index++)
            return (XmlElement("span",[],[XmlText("\n                "),(XmlElement("input",[{name:"checked",value:(option.selected)},{name:"class",value:("radio-button")},{name:"id",value:(id)},{name:"name",value:(formName)},{name:"onchange",value:(self.change.valueHandler)},{name:"onclick",value:("this.blur()")},{name:"type",value:("radio")},{name:"value",value:(option.value)}],[])),XmlText("\n                "),(XmlElement("label",[{name:"for",value:(id)}],[XmlJavascriptFragment(option.label)])),XmlText("\n              ")]))
          })
        ),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
  
  __rsu._class('ButtonBar',this,self,ButtonBar,ButtonBar$class);function ButtonBar(){return __rsu._construct(this,'ButtonBar',ButtonBar$class,arguments.callee,arguments);};function ButtonBar$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function ButtonBar$ctor(){

    self.data = self.settings.dataProvider || List()
    
    function selectButton(item,index){
      return (function(){
        _selectedIndex = index
        $("> .button-bar-buttons > .button-bar-button.selected",self.jquery()).removeClass("selected")
        $("> .button-bar-buttons > .button-bar-button.child"+index,self.jquery()).addClass("selected")
        var action = item.action || item.onselected
        if(action) action()
      })
    }
    
    var _selectedIndex = self.settings.selectedIndex || 0
    __rsu._method('selectedIndex',this,self,false,function(index){
      if(arguments.length > 0) selectButton(self.data(index),index)()
      return _selectedIndex;
    });
    
    __rsu._method('refresh',this,self,false,function(){
      var target = self.jquery()
      if(target.length > 0){
        $("> .button-bar-buttons",target).remove();
        body().appendTo(target)
      }
    });
    
    __rsu._method('body',this,self,false,function(){ return (XmlElement("div",[{name:"class",value:("button-bar-buttons")}],[XmlJavascriptFragment(buttons())])) });
    __rsu._method('buttons',this,self,false,function(){
      var index = 0;
      var first = 0;
      var last = self.data.size() - 1
      return from(self.data).map(function(item){
        return Button({
          label:item.label,
          classNames:["button-bar-button",(index == first?"first":index == last?"last":'middle'),(index%2==0?"even":"odd"),"child"+index,(index == _selectedIndex)?'selected':'']
        }).click(selectButton(item,index++))
      })
    });
    
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:("button-bar")}],[XmlText("\n          "),XmlJavascriptFragment(body()),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
  
  __rsu._class('LoadingMessage',this,self,LoadingMessage,LoadingMessage$class);function LoadingMessage(){return __rsu._construct(this,'LoadingMessage',LoadingMessage$class,arguments.callee,arguments);};function LoadingMessage$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function LoadingMessage$ctor(){
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:("loading-message")}],[XmlText("\n          "),(XmlElement("div",[{name:"class",value:("loading-container")}],[XmlText("\n            "),(XmlElement("span",[{name:"class",value:("loading-text")}],[XmlText("Loading...")])),XmlText("\n          ")])),XmlText("\n        ")]))
    });
  }).apply(this,[])}}

  /* see http://code.google.com/apis/maps/documentation/javascript/3.2/reference.html#MapOptions*/
  __rsu._class('GoogleMap',this,self,GoogleMap,GoogleMap$class);function GoogleMap(){return __rsu._construct(this,'GoogleMap',GoogleMap$class,arguments.callee,arguments);};function GoogleMap$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function GoogleMap$ctor(){
    
    self.mapReady = Event(self)
        
    domMeasured(function(node){
      $(node).bind('touchstart',(function(_rs83456_){return (_rs83456_.stopPropagation())}))
      $(node).bind('touchmove',(function(_rs83457_){return (_rs83457_.stopPropagation())}))
      self.map = new google.maps.Map(node,self.settings);
      self.mapReady.invoke(self.map,node)
    })
    
    __rsu._method('updateSettings',this,self,false,function(settings){ self.map.setOptions(settings) });
    
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:("google-map")}],[XmlJavascriptFragment(LoadingMessage())]))
    });
  }).apply(this,[])}}
  
  __rsu._class('ProgressBar',this,self,ProgressBar,ProgressBar$class);function ProgressBar(){return __rsu._construct(this,'ProgressBar',ProgressBar$class,arguments.callee,arguments);};function ProgressBar$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function ProgressBar$ctor(){
    
    var currentValue = 0
    var currentIsIndeterminate = false
    
    __rsu._method('value',this,self,false,function(value,total){
      currentIsIndeterminate = false
      /*make value a percentage of total*/
      if(total) value = value / total
      /*clamp value between 0.0 and 1.0*/
      currentValue = Math.min(1.0,Math.max(0.0,value))
      updateDisplay()
      return self
    });
    
    __rsu._method('indeterminate',this,self,false,function(){
      /*if(currentIsIndeterminate) return;*/
      currentIsIndeterminate = true
      updateDisplay()
      return self
    });
    
    function updateDisplay(){
      var overlay = $("> .progress-container > .progress-background > .overlay",jquery())
      function animateOverlay(){
        if(!currentIsIndeterminate) return;
        overlay.css({left:-50}).animate({left:0},750,"linear",animateOverlay)
      }
      
      /*fix the decimal to 1 place*/
      function progress(value){ $("> .progress-container > .progress-background > .progress",jquery()).css({width:(Math.round(1000*value)/10.0)+"%"}) }
      if(currentIsIndeterminate){
        animateOverlay()
        progress(1.0)
        jquery().addClass("indeterminate")
      } else {
        progress(currentValue)
        jquery().removeClass("indeterminate")
      }
    }
    
    self.domInserted(updateDisplay)
    
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:("progress-bar")}],[XmlText("\n          "),(XmlElement("div",[{name:"class",value:("progress-container")}],[XmlText("\n            "),(XmlElement("div",[{name:"class",value:("progress-background")}],[XmlText("\n              "),(XmlElement("div",[{name:"class",value:("progress")}],[])),XmlText("\n              "),(XmlElement("div",[{name:"class",value:("overlay")}],[])),XmlText("\n              "),(XmlElement("div",[{name:"class",value:("label")}],[])),XmlText("\n            ")])),XmlText("\n          ")])),XmlText("\n        ")]))
    });
    
  }).apply(this,[])}}
  
  __rsu._class('FileUploadButton',this,self,FileUploadButton,FileUploadButton$class);function FileUploadButton(){return __rsu._construct(this,'FileUploadButton',FileUploadButton$class,arguments.callee,arguments);};function FileUploadButton$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function FileUploadButton$ctor(){
    
    self.change = Event(self)
    self.complete = Event(self)
    
    var targetName = self.componentId+"_target"
    
    function onFileSelected(){
      var fullName = this.value || ""
      var lastSlash = Math.max(fullName.lastIndexOf("/"),fullName.lastIndexOf("\\"))
      var name = lastSlash > 0? fullName.substring(lastSlash+1) : fullName
      var lastDot = name.lastIndexOf(".")
      var extension = lastDot > 0? name.substring(lastDot+1).toLowerCase() : ""
      
      var fileInfo = {size:-1,name:name,extension:extension,upload:self.upload}
      
      if(this.files && this.files[0])
        fileInfo.size = this.files[0].size || this.files[0].fileSize
      
      self.change.invoke(fileInfo)
    }
    
    __rsu._method('upload',this,self,false,function(){ jquery("> form").submit() });
    
    var loadCount = 0
    function onLoad(){
      if(loadCount++ == 0) return;
      self.complete.invoke()
    }
    
    __rsu._method('render',this,self,false,function(){
      return (XmlElement("div",[{name:"class",value:("file-upload-button")}],[XmlText("\n          "),(XmlElement("form",[{name:"action",value:(self.settings.url)},{name:"enctype",value:("multipart/form-data")},{name:"method",value:("post")},{name:"target",value:(targetName)}],[XmlText("\n            "),(XmlElement("input",[{name:"name",value:(self.settings.fieldname || "file")},{name:"onchange",value:(onFileSelected)},{name:"type",value:("file")}],[])),XmlText("\n          ")])),XmlText("\n          "),(XmlElement("iframe",[{name:"name",value:(targetName)},{name:"onload",value:(onLoad)},{name:"src",value:("about:blank")},{name:"style",value:("width:0px;height:0px;border:0px;visibility:hidden;position:absolute;")}],[])),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
  
  __rsu._class('Popup',this,self,Popup,Popup$class);function Popup(){return __rsu._construct(this,'Popup',Popup$class,arguments.callee,arguments);};function Popup$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Container,Container$class,[settings]);with(self){(function Popup$ctor(){
    __rsu._method('render',this,self,true,function(){ return (XmlElement("div",[{name:"class",value:("popup")}],[XmlJavascriptFragment(self.children)])) });
    
    __rsu._method('showAt',this,self,false,function(x,y,autoHide){
      var popup = self.appendTo(document.body).jquery().addClass("show-popup").hide().css({position:"absolute", left: x, top: y}).fadeIn()
      if(autoHide) configureAutoHide(popup)
    });
    
    function configureAutoHide(popup){
      popup.bind("mousewheel mousedown touchstart",(function(_rs83458_){return (_rs83458_.stopPropagation())}))
      $(window).bind("mousewheel mousedown touchstart",close)
    }
    
    __rsu._method('close',this,self,false,function(){
      jquery().fadeOut(self.remove)
      $(window).unbind("mousedown touchstart mousewheel", close)
    });
    
    __rsu._method('showFor',this,self,false,function(component,position,autohide){
      autohide = autohide == null || autohide == true
      
      /*insert the popup*/
      var popup = self.appendTo(document.body).jquery().addClass("show-popup").hide()
      
      /*ensure we have a jquery object*/
      component = UiTools.jquery(component)
      position = Seq.fromString(position || "top-center")
      
      var offset = component.offset()
      
      var verticalAlign = position.takeWhile(function(_rs83459_){return (_rs83459_ != "-")}).toString()
      var horizontalAlign = position.dropWhile(function(_rs83460_){return (_rs83460_ != "-")}).drop(1).toString()
      
      var top = match(verticalAlign)(__rsu._partialFunction(
        function(_rs83448_){return ((_rs83448_ === "top"))?function(){return ( offset.top + component.outerHeight())}:null}
        ,function(_rs83449_){return ((_rs83449_ === "center"))?function(){return ( offset.top + ((component.outerHeight() - popup.outerHeight()) / 2))}:null}
        ,function(_rs83450_){return ((_rs83450_ === "bottom"))?function(){return ( offset.top - popup.outerHeight()
      )}:null}))
      
      var left = match(horizontalAlign)(__rsu._partialFunction(
        function(_rs83451_){return ((_rs83451_ === "left"))?function(){return ( offset.left)}:null}
        ,function(_rs83452_){return ((_rs83452_ === "center"))?function(){return ( offset.left + ((component.outerWidth() - popup.outerWidth()) / 2))}:null}
        ,function(_rs83453_){return ((_rs83453_ === "right"))?function(){return ( (offset.left + component.outerWidth()) - popup.outerWidth()
      )}:null}))
      
      popup.addClass(verticalAlign).addClass(horizontalAlign).css({position:"absolute", left: left, top: top}).fadeIn()
      
      if(autohide)
        configureAutoHide(popup)
      
      return self
    });
    
  }).apply(this,[])}}
  
  __rsu._class('ToolTip',this,self,ToolTip,ToolTip$class);function ToolTip(){return __rsu._construct(this,'ToolTip',ToolTip$class,arguments.callee,arguments);};function ToolTip$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Popup,Popup$class,[settings]);with(self){(function ToolTip$ctor(){
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:("tooltip")}],[XmlText("\n          "),(XmlElement("div",[{name:"class",value:("tooltip-container")}],[XmlText("\n            "),(XmlElement("div",[{name:"class",value:("tooltip-arrow-container")}],[XmlText("\n              "),(XmlElement("div",[{name:"class",value:("tooltip-arrow")}],[])),XmlText("\n            ")])),XmlText("\n            "),(XmlElement("div",[{name:"class",value:("tooltip-content")}],[XmlText("\n              "),XmlJavascriptFragment(self.children),XmlText("\n            ")])),XmlText("\n          ")])),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs630_ = {};with(this){with(_rs630_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._import('rescripted.collections',rescripted.collections,'_',_rs630_)
__rsu._import('rescripted.xml',rescripted.xml,'_',_rs630_)
__rsu._import('rescripted.ui',rescripted.ui,'_',_rs630_)

__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){
  
  __rsu._class('ListView',this,self,ListView,ListView$class);function ListView(){return __rsu._construct(this,'ListView',ListView$class,arguments.callee,arguments);};function ListView$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function ListView$ctor(){

    var dataSource = DataSource(self.settings.dataSource)
    var renderer = self.settings.itemRenderer
    var isSelectedItem = self.settings.isSelectedItem || (function(){false})
    
    self.change = Event(self)
    
    self.data = List()
    self.filterPredicate = null
    self.sortFunction = null
    self.sortDirection = null
    
    __rsu._method('sort',this,self,false,function(func,dir){
      self.sortFunction = func
      self.sortDirection = dir
      self.refresh()
      return self
    });
    
    __rsu._method('filter',this,self,false,function(predicate){
      self.filterPredicate = match(predicate)(__rsu._partialFunction(
        function(search){return (isInstanceOf(search,String))?function(){return ( buildPredicate(search))}:null}
        ,function(func){return (isInstanceOf(func,Function))?function(){return ( func)}:null}
        ,function(other){return function(){return ( null
      )}}))
      refresh()
      return self
    });
    
    function buildPredicate(searchString){
      var searchValues = Seq.fromArray(searchString.toLowerCase().split(/\s+/)).filter(function(_rs63203_){return (_rs63203_!='')})
      return (function(item){
        if(searchValues.size() == 0) return true;
        var matchCount = 0;
        var itemValue = renderer(item).toString().toLowerCase()
        searchValues.foreach(function(value){
          if(itemValue.indexOf(value) != -1)
            matchCount++            
        })
        return matchCount >= searchValues.size();
      })
    }
    
    function itemClick(item){
      return (function(e){
        jquery(".listview-item").removeClass("selected")
        $(this).addClass("selected")
        self.change.invoke(item)
      })
    }

    __rsu._method('refresh',this,self,false,function(){ replaceBody(responseBody()) });
    
    __rsu._method('responseBody',this,self,false,function(){
      var matchingData = (self.filterPredicate == null)? self.data:self.data.filter(self.filterPredicate);
      if(self.sortFunction != null && self.sortDirection != null)
        matchingData.sort(self.sortFunction,self.sortDirection);
      
      if(matchingData.size() == 0)
        return noResultsMessage()
      
      var index = 0;
      return matchingData.map(function(item){ 
        var className = List('listview-item',isSelectedItem(item)?"selected":"",(index%2==0?'odd':'even'),'row'+(index++)).mkString(" ")
        return itemWrapper(renderer(item),item).update('class',className)
      })
    });
    
    __rsu._method('itemWrapper',this,self,false,function(rendered,item){ return (XmlElement("a",[{name:"href",value:("javascript:void(0)")},{name:"onclick",value:(itemClick(item))}],[XmlJavascriptFragment(rendered)])) });
    
    __rsu._method('listWrapper',this,self,false,function(value){ return (XmlElement("div",[{name:"class",value:("listview-body")}],[XmlJavascriptFragment(value)])) });
    
    __rsu._method('replaceBody',this,self,false,function(value){
      jquery("> .listview-body").remove()
      var target = jquery()
      if(target.length > 0) listWrapper(value).appendTo(target)
    });
    
    __rsu._method('reload',this,self,false,function(){
      replaceBody(loadingMessage())
      dataSource(function(data){
        self.data = from(data)
        setTimeout(refresh,10);
      })
    });
    
    __rsu._method('loadingMessage',this,self,false,function(){ return LoadingMessage() });
    __rsu._method('noResultsMessage',this,self,false,function(){ return (XmlElement("span",[{name:"class",value:("no-results-message")}],[XmlText("No Results.")])) });
    
    self.domInserted(self.reload)

    __rsu._method('render',this,self,true,function(){ return (XmlElement("div",[{name:"class",value:("listview")}],[XmlJavascriptFragment(listWrapper(loadingMessage()))])) });
  }).apply(this,[])}}
  
  __rsu._class('ListViewSimpleRenderer',this,self,ListViewSimpleRenderer,ListViewSimpleRenderer$class);function ListViewSimpleRenderer(){return __rsu._construct(this,'ListViewSimpleRenderer',ListViewSimpleRenderer$class,arguments.callee,arguments);};function ListViewSimpleRenderer$class(item){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[]);with(self){(function ListViewSimpleRenderer$ctor(){
    __rsu._method('render',this,self,false,function(){
      return (XmlElement("div",[],[XmlJavascriptFragment(item)]))
    });
  }).apply(this,[])}}
  
  __rsu._method('twoLineRenderer',this,self,false,function(line1,line2){
    return (function(item){return ( ListViewTwoLineRenderer(item,line1,line2))})
  });
  
  __rsu._class('ListViewTwoLineRenderer',this,self,ListViewTwoLineRenderer,ListViewTwoLineRenderer$class);function ListViewTwoLineRenderer(){return __rsu._construct(this,'ListViewTwoLineRenderer',ListViewTwoLineRenderer$class,arguments.callee,arguments);};function ListViewTwoLineRenderer$class(item,line1,line2){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[]);with(self){(function ListViewTwoLineRenderer$ctor(){
    __rsu._method('render',this,self,false,function(){
      if(item == null){
        return (XmlElement("div",[],[XmlText("Empty")]))
      }
      return (XmlElement("div",[{name:"class",value:("listview-two-line-renderer")}],[XmlText("\n          "),(XmlElement("div",[{name:"class",value:("line1")}],[XmlJavascriptFragment(line1(item))])),XmlText("\n          "),(XmlElement("div",[{name:"class",value:("line2")}],[XmlJavascriptFragment(line2(item))])),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
  

  __rsu._class('DataGrid',this,self,DataGrid,DataGrid$class);function DataGrid(){return __rsu._construct(this,'DataGrid',DataGrid$class,arguments.callee,arguments);};function DataGrid$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function DataGrid$ctor(){

    var columns = List.fromArray(self.settings.columns || []).flatten()
    var dataSource = DataSource(self.settings.dataSource)
    
    self.data = List()
    self.filterPredicate = null
    self.sortFunction = null
    self.sortDirection = null
    
    function columnLowerCaseValue(column){
      return (function(item){
        var result = column.format(item);
        return result == null?null:result.toString().toLowerCase()
      })
    }
    
    function buildSortHandler(column){
      if(!column.sort)
        return null;
      
      var sortFunction = column.sort;
      if(typeOf(sortFunction) == Boolean)
        sortFunction = columnLowerCaseValue(column);
      
      return (function(){ 
        var ascending = $(".sort.ascending",this).is(":visible")
        /*hide all indicators*/
        $("> table > thead > tr > td .sort",self.jquery()).css({display:"none"})
        /*show the correct indicator and sort*/
        if(ascending){
          $(".sort.descending",this).css({display:"inline"})
          self.sortDirection = "desc"
        } else {
          $(".sort.ascending",this).css({display:"inline"})
          self.sortDirection = "asc"
        }
        self.sortFunction = sortFunction
        self.refresh()
      })
    }
    
    __rsu._method('header',this,self,false,function(){
      return (XmlElement("tr",[],[XmlText("\n        "),XmlJavascriptFragment(
          columns.map((function(column){
            var sortEvent = buildSortHandler(column)
            var className = List('datagrid-column-heading',sortEvent != null?'can-sort':'').filter((function(_rs63204_){return (_rs63204_!='')})).mkString(" ")
            return (XmlElement("td",[{name:"class",value:(className)},{name:"onclick",value:(sortEvent)},{name:"width",value:(column.width)}],[XmlText("\n                "),(XmlElement("span",[],[XmlJavascriptFragment(column.name)])),XmlText("\n                "),(XmlElement("span",[{name:"class",value:("sort ascending")}],[(XmlElement("span",[{name:"class",value:("symbol")}],[XmlText("▼")]))])),XmlText("\n                "),(XmlElement("span",[{name:"class",value:("sort descending")}],[(XmlElement("span",[{name:"class",value:("symbol")}],[XmlText("▲")]))])),XmlText("\n              ")]))
          }))
        ),XmlText("\n        ")]))
    });
    
    function buildPredicate(searchString){
      var values = List.fromArray(searchString.toLowerCase().split(/\s+/)).filter((function(_rs63205_){return (_rs63205_!='')}))
      return (function(item){
        if(values.size() == 0) return true;
        var matchCount = 0;
        from(values).foreach(function(value){
          var matched = false
          from(columns).foreach(function(column){
            var columnValue = columnLowerCaseValue(column)(item)
            if(columnValue != null && columnValue.toString().indexOf(value) != -1)
              matched = true;
          })
          if(matched)
            matchCount++
        })
        return matchCount >= values.size();
      })
    }
    
    __rsu._method('filter',this,self,false,function(predicate){
      switch(typeOf(predicate)){
        case String:
          self.filterPredicate = buildPredicate(predicate)
          break;
        case Function:
          self.filterPredicate = predicate
          break;
        default:
          self.filterPredicate = null
      }
      refresh();
      return self;
    });

    __rsu._method('refresh',this,self,false,function(){
      var target = jquery("> table")
      if(target.length > 0){
        jquery("> table > tbody").remove();
        createBody().appendTo(target)
      }
    });
    
    __rsu._method('createBody',this,self,false,function(){
      var matchingData = (self.filterPredicate == null)? self.data:self.data.filter(self.filterPredicate);
      if(self.sortFunction != null && self.sortDirection != null)
        matchingData.sort(self.sortFunction,self.sortDirection);
      
      if(matchingData.size() == 0)
        return noResultsMessage()
      
      var index = 0;
      return (XmlElement("tbody",[{name:"class",value:("datagrid-body")}],[XmlText("\n        "),XmlJavascriptFragment(
          from(matchingData).map(function(value){
            var className = List('datagrid-row',(index%2==0?'odd':'even'),'row'+(index++)).mkString(" ")
            return (XmlElement("tr",[{name:"class",value:(className)}],[XmlJavascriptFragment( from(columns).map(function(column){ return (XmlElement("td",[{name:"class",value:("datagrid-column")}],[XmlJavascriptFragment(column.format(value))])) }) )]))
          })
        ),XmlText("\n        ")]))
    });
    
    __rsu._method('reload',this,self,false,function(){      
      jquery("> table > tbody").remove()
      loadingMessage().appendTo(jquery("> table"))
      dataSource((function(data){
        self.data = from(data)
        setTimeout(refresh,10);
      }))
    });
    
    __rsu._method('loadingMessage',this,self,false,function(){
      return (XmlElement("tbody",[{name:"class",value:("datagrid-body")}],[XmlText("\n          "),(XmlElement("tr",[],[XmlText("\n            "),(XmlElement("td",[{name:"class",value:("datagrid-loading-message")},{name:"colspan",value:(columns.size())}],[XmlJavascriptFragment(LoadingMessage())])),XmlText("\n          ")])),XmlText("\n        ")]))
    });
    
    __rsu._method('noResultsMessage',this,self,false,function(){
      return (XmlElement("tbody",[{name:"class",value:("datagrid-body")}],[XmlText("\n          "),(XmlElement("tr",[],[XmlText("\n            "),(XmlElement("td",[{name:"class",value:("no-results-message")},{name:"colspan",value:(columns.size())}],[XmlText("No Results.")])),XmlText("\n          ")])),XmlText("\n        ")]))
    });
    
    self.domInserted(self.reload)

    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:("datagrid")}],[XmlText("\n          "),(XmlElement("table",[{name:"class",value:("ui-table")}],[XmlText("\n            "),(XmlElement("thead",[{name:"class",value:("datagrid-header")}],[XmlJavascriptFragment(self.header())])),XmlText("\n            "),XmlJavascriptFragment(loadingMessage()),XmlText("\n          ")])),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
  
}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs50_ = {};with(this){with(_rs50_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._import('rescripted.collections',rescripted.collections,'_',_rs50_)
__rsu._import('rescripted.xml',rescripted.xml,'_',_rs50_)
__rsu._import('rescripted.ui',rescripted.ui,'_',_rs50_)

__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){

  /*based in part on glovebox: http://code.google.com/p/glovebox/*/
  __rsu._class('ScrollableContainer',this,self,ScrollableContainer,ScrollableContainer$class);function ScrollableContainer(){return __rsu._construct(this,'ScrollableContainer',ScrollableContainer$class,arguments.callee,arguments);};function ScrollableContainer$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Container,Container$class,[settings]);with(self){(function ScrollableContainer$ctor(){

    var startX = 0
    var startY = 0
    
    var lastX = 0
    var lastY = 0
	
    var xVel = 0
    var yVel = 0
    
    var currentX = 0
    var currentY = 0
    
    var scrollY = true
    var scrollX = false
    
    var isDragging = false
	
    var container = null
    var content = null
    
    var state = null
    
    var _dragThreshold = 10
    
    var throttle = FrequencyThrottle(50)
    
    var isTouchScroll = isMobileBrowser() && !($("body").hasClass("use-body-scroll"))
    
    if(isTouchScroll){
      self.domInserted(function(node){
        document.addEventListener("touchmove", (function(e){ e.preventDefault()}), false)
        container = node
        container.addEventListener('touchstart', touchStart, false);
        container.addEventListener('click', (function(e){
            if(isDragging){
              e.preventDefault()
              e.stopPropagation()
            }
          }), true)
        content = document.getElementById(self.componentId+"-content")
        content.addEventListener("webkitTransitionEnd", transitionEnd, true );
        content.style.webkitTransition = "none";
      })
    }
    
    var disabledFormElements = null
    function disableInputs(){
     /* disabledFormElements = ArraySeq()*/
     /* var toDisable = ArraySeq(*/
     /*   document.getElementsByTagName("select"),*/
     /*   document.getElementsByTagName("input"),*/
     /*   document.getElementsByTagName("textarea")*/
     /*   ).flatten()*/
     /* */
     /* for(elem <- toDisable if !elem.disabled){*/
     /*   elem.disabled = true*/
     /*   disabledFormElements.append(elem)*/
     /* }*/
    }
    
    function reenableInputs(){
     /* if(disabledFormElements != null)*/
     /*   disabledFormElements.foreach{_.disabled = false}*/
     /* disabledFormElements = null*/
    }
    
    function addTouchListeners(){
      container.addEventListener('touchmove', touchMove, false);
      container.addEventListener('touchend', touchEnd, false);
      container.addEventListener('touchcancel', touchEnd, false);
    }
    
    function removeTouchListeners(){
      container.removeEventListener('touchmove', touchMove, false);
      container.removeEventListener('touchend', touchEnd, false);
      container.removeEventListener('touchcancel', touchEnd, false);
    }
    
    function updateTransform(){
      if(isTouchScroll) {
        if(content) content.style.webkitTransform =  "translate3d("+currentX+"px,"+currentY+"px,0px) scale(1.0)";
      } else {
        $(container).scrollLeft(currentX)
        $(container).scrollTop(currentY)
      }
    }
    
    function touchStart(e){
      if(e.targetTouches.length != 1) return false
        
      content.style.webkitTransition = "none";  
        
      state = "starting";
        
      e.stopPropagation()
      startX = e.targetTouches[0].pageX
      startY = e.targetTouches[0].pageY
      lastX = startX
      lastY = startY
      xVel = 0
      yVel = 0
      addTouchListeners()
    }

    function touchMove(e){
      /* Don't track motion when multiple touches are down in this element (that's a gesture)*/
      if (e.targetTouches.length != 1) return false;
      if(disabledFormElements == null) disableInputs();

      state = "moving";
      
      /* Prevent the browser from doing its default thing (scroll, zoom)*/
      e.preventDefault();
      /*e.stopPropagation()*/
      
      var x = e.targetTouches[0].pageX;
      var y = e.targetTouches[0].pageY;
      
      var dX = x - lastX;
      var dY = y - lastY;
      
      if(!isDragging && ( Math.abs(dX) > _dragThreshold || Math.abs(dY) > _dragThreshold ) ){
        isDragging = true;
      }
      /* it may have been changed by the statement above*/
      if(isDragging){
        /* poor-man's input filter */
        xVel = (dX + xVel * 10 ) / 10;
        yVel = (dY + yVel * 10 ) / 10;
        
        scrollTo(
          scrollX ? ( currentX + dX ) : currentX,
          scrollY ? ( currentY + dY ) : currentY
          );
        
        lastX = x;
        lastY = y;
      }
    }

    function touchEnd(e){
      if(!isDragging) return false;
      
      content.style.webkitTransition = "-webkit-transform 300ms ease-out";
      
      setTimeout((function(){isDragging = false; reenableInputs()}) ,1000);
      /* Prevent the browser from doing its default thing (scroll, zoom)*/
      removeTouchListeners()
      
      /* pass on our mock event*/
      touchMove({targetTouches:e.changedTouches,preventDefault:(function(){e.preventDefault()}),stopPropagation:(function(){e.stopPropagation()})})
      
      state = "ending";
      /* magic number 2 is a projection of how far we will throw the scroll content before*/
      /* snapping it back, this will take the length of the afterTrans, and is a poor-man's*/
      /* interpretation of momentum*/
      scrollTo(
        Math.round(scrollX ? ( currentX + (2 * xVel) ) : currentX),
        Math.round(scrollY ? ( currentY + (2 * yVel) ) : currentY)
        )

      return false;
    }
    
    function finishScrolling(){
      state = "done";
      isDragging = false;
      
      /* get updated x position*/
      var pWidth = container.offsetWidth;
      var selfWidth = content.scrollWidth;/* * scale;*/
      var maxX = ( selfWidth - pWidth ) / 2; /* div 2 beacause we scale from the center ( 50% )*/
      var minX = ( pWidth - selfWidth ) / 2;
      
      var newLeft = Math.min(maxX,Math.max(currentX,minX));
      /* get updated y*/
    
      var pHeight = container.offsetHeight;
      var selfHeight = content.scrollHeight/* * scale;*/
      
      var maxY = 0;
      var minY = pHeight - selfHeight
      
      var newTop = Math.min(maxY,Math.max(currentY,minY))
      scrollTo(newLeft,newTop)
    }
    
    function transitionEnd(){ if(state == "ending"){ finishScrolling() } }
    
    __rsu._method('scrollTo',this,self,false,function(x,y){ 
      currentX = x
      currentY = y
      updateTransform()/*throttle(updateTransform)*/
    });
    
    __rsu._method('scrollToX',this,self,false,function(x){
      currentX = x
      updateTransform()/*throttle(updateTransform)*/
    });
    
    __rsu._method('scrollToY',this,self,false,function(y){
      currentX = y
      updateTransform()/*throttle(updateTransform)*/
    });
      
    __rsu._method('scrollableContent',this,self,false,function(){return $(".scrollable-content",jquery())});
    
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:("container scrollable")}],[(XmlElement("div",[{name:"class",value:("scrollable-content")},{name:"id",value:(self.componentId+"-content")}],[XmlJavascriptFragment(self.children)]))]))
    });
  }).apply(this,[])}}
  
}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs650_ = {};with(this){with(_rs650_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._import('rescripted.collections',rescripted.collections,'_',_rs650_)
__rsu._import('rescripted.xml',rescripted.xml,'_',_rs650_)
__rsu._import('rescripted.ui',rescripted.ui,'_',_rs650_)

__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){
  
  __rsu._object('StackNavigator',this,self,StackNavigator,StackNavigator$object);function StackNavigator(){return __rsu._construct(this,'StackNavigator',StackNavigator$class,arguments.callee,arguments);};function StackNavigator$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function StackNavigator$object$ctor(){
    __rsu._object('Path',this,self,Path,Path$object);function Path(){return __rsu._construct(this,'Path',Path$class,arguments.callee,arguments);};function Path$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function Path$object$ctor(){
      __rsu._method('unapply',this,self,false,function(str,wildcard,extractor){return (
        (typeOf(str) != String)? null : Seq.unapply(parts(str),wildcard,extractor)
      )});
      __rsu._method('parts',this,self,false,function(path){return Seq.fromArray(path.split("/")).dropWhile(function(_rs65136_){return (_rs65136_=="")})});
      __rsu._method('partCount',this,self,false,function(path){return parts(path).size()});
    }).apply(this,[])}}
    
    __rsu._object('Command',this,self,Command,Command$object);function Command(){return __rsu._construct(this,'Command',Command$class,arguments.callee,arguments);};function Command$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function Command$object$ctor(){
      __rsu._method('unapply',this,self,false,function(str,wildcard,extractor){return (
       (typeOf(str) != String)? null : Seq.unapply(parts(str),wildcard,extractor)
      )});
      __rsu._method('parts',this,self,false,function(path){return ( Seq.fromArray(path.split(":")) )});
    }).apply(this,[])}}
    
    __rsu._class('Redirect',this,self,Redirect,Redirect$class);function Redirect(){return __rsu._construct(this,'Redirect',Redirect$class,arguments.callee,arguments);};function Redirect$class(path){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function Redirect$ctor(){
      self.path = path
      self.stackChild = DefaultStackChild
      
      __rsu._method('orShow',this,self,false,function(stackChild){ self.stackChild = stackChild; return self });
    }).apply(this,[])}}
  }).apply(this,[])}}
  
  __rsu._class('StackNavigator',this,self,StackNavigator,StackNavigator$class);function StackNavigator(){return __rsu._construct(this,'StackNavigator',StackNavigator$class,arguments.callee,arguments);};function StackNavigator$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function StackNavigator$ctor(){
    self.Path = StackNavigator.Path
    self.Command = StackNavigator.Command
    self.Redirect = StackNavigator.Redirect


    __rsu._method('defaultPath',this,self,false,function(){return (settingsWithDefaults({path:"/"}).path)});
    
    var children = List() /*all children in the stack*/
    var activeChildren = List() /*visible children in the stack*/
    
    var currentPath = null
    
    __rsu._method('navigateTo',this,self,false,function(path){
      if(path.charAt(0) != "/" && path.charAt(0) != "#"){
        path = "/"+currentPath+"/"+path
      }
      handleNavigation(path)
    });
    
    __rsu._method('refresh',this,self,false,function(){ handleNavigation(currentPath,true,true) });
    
    function handleNavigation(path,refresh,rebuild){
      
      var hashNavigation = path == "#"
      
      /*pull path from the hash*/
      if(hashNavigation) path = location.hash.substring(1)
        
      /*parse the path*/
      var pathParts = Path.parts(path)
      var normalizedPath = pathParts.mkString("/")
        
      /*undefined paths are resolved to the root path*/
      if(!resolve.isDefinedAt(path)) path = "/"
      
      /*detect redirects*/
      var currentResolvedPath = resolve(normalizedPath)
      if(typeOf(currentResolvedPath) == Redirect)
        return handleNavigation(currentResolvedPath.path,refresh)

      /*update the hash*/
      if(!refresh && defaultPath() == "#" && !hashNavigation) location.hash = path

      /*detect attempt to renavigate*/
      if(normalizedPath == currentPath && !refresh) return;
      currentPath = normalizedPath
      
      /*collect info on paths*/
      var allPaths = Range(0,pathParts.size()).inclusive().map(function(i){return ( pathParts.take(i).mkString("/"))})
      var childrenToRemove = rebuild ? children : children.filter(function(child){return ( !allPaths.contains(child.currentPath))})
      
      /*only keep the children that are still part of the path*/
      children = rebuild ? List() : children.filter(function(child){return ( allPaths.contains(child.currentPath))})
      
      /*find missing paths and generate the components*/
      from(allPaths).filter(function(unresolvedPath){return !children.exists(function(_rs65137_){return (_rs65137_.currentPath == unresolvedPath)});}).foreach(function(unresolvedPath){
        if(!resolve.isDefinedAt(unresolvedPath))
          error("Unable to resolve path '"+unresolvedPath+"' while trying to navigate to '"+path+"'.")
        var child = resolve(unresolvedPath)
        
        /*detect alternate view for redirected paths*/
        if(typeOf(child) == Redirect) child = child.stackChild()
          
        child.currentPath = unresolvedPath
        child.navigator = self
        children.push(child)
      })
      
      /*measure and select children*/
      var totalWidth = jquery().width()
      var availableWidth = totalWidth
      var currentIndex = 0
      activeChildren = List()
      for(var i=children.size() - 1;i>=0;i--){
        var child = children(i).changeState({depth:currentIndex,totalWidth:totalWidth,availableWidth:availableWidth})
        /*don't break if we are on the first child, the first child is always active*/
        if(currentIndex!=0 && child.preferredWidth > availableWidth)
          break;
        activeChildren.append(child)
        availableWidth -= child.preferredWidth
        currentIndex++
      }
      activeChildren(0).preferredWidth += availableWidth
      
      /*notify children of their new locations*/
      var areaRemaining = totalWidth
      from(activeChildren).foreach(function(child){
        areaRemaining -= child.preferredWidth
        child.currentLeft = areaRemaining
      })
      
      /*remove children that are no longer welcome*/
      from(childrenToRemove).filter(function(child){return child.currentControl != null;}).foreach(function(child){
        child.jquery().animate({left:(Path.partCount(child.currentPath) >= Path.partCount(currentPath))?totalWidth:0,width:0},250,(function(){ child.remove()}))
      })
      
      /*shove children into their proper place if they survived*/
      var container = jquery("> .components")
      from(activeChildren).foreach(function(child){
        if(child.element() == null){
          child.appendTo(container).jquery().css({left:(Path.partCount(child.currentPath) >= Path.partCount(currentPath))?totalWidth:0,width:0})
        }
        child.jquery().show()
        child.moveIntoPlace()
      })
      
      /*hide the children that don't have enough room to be shown*/
      from(children).filter(function(child){return !activeChildren.contains(child);}).foreach(function(child){
        child.jquery().animate({left:0,width:0},250,(function(){ child.jquery().hide()}))
      })
      
      /*notify children of new sub paths*/
      from(children.take(children.size()-1)).foreach(function(child){
        child.subPathNavigated.invoke(normalizedPath.substring(child.currentPath.length))
      })
      
      /*breadcrumb*/
      var breadcrumb = jquery("> .stack-navigator-toolbar > .breadcrumb").empty()
      /*var breadcrumbData = children.map(child => { label:child.label, action:{=> self.navigateTo("/"+child.currentPath)} })*/
      /*ButtonBar{dataProvider:breadcrumbData}.appendTo(breadcrumb)*/
      var last = children.size() - 1
      var currentButton = 0
      Container()(
        children.map(function(child){
          var index = currentButton++
          return Button({
                    label:child.label,
                    classNames:List("breadcrumb-button",(index == 0? "home":""),(index == last?"selected":""),"child"+index).filter(function(_rs65138_){return (_rs65138_!="")})
                  }).click(function(){ self.navigateTo("/"+child.currentPath) })
        })
      ).appendTo(breadcrumb)
      
      /*controls*/
      activeChildren(0).controls.appendTo(jquery("> .stack-navigator-toolbar > .controls").empty())
      
      setTimeout(detectMultilineNavigation,250)
    }
    
    __rsu._method('detectMultilineNavigation',this,self,false,function(){
      var breadcrumbWidth = jquery("> .stack-navigator-toolbar > .breadcrumb").width()
      var controlsWidth = jquery("> .stack-navigator-toolbar > .controls").width()
      var navigationWidth = jquery("> .stack-navigator-toolbar").width()
      if( (breadcrumbWidth + controlsWidth + 20) > navigationWidth)
        jquery().addClass("two-lines")
      else
        jquery().removeClass("two-lines")
    });
    
    __rsu._abstractMethod('resolve',this,self);
    
    domMeasured(function(){
      if(defaultPath() == "#") $(window).bind('hashchange',(function(){ navigateTo("#")}));
      navigateTo(defaultPath())
    })
        
    $(window).resize(DelayedAction(500,(function(){
      handleNavigation(currentPath,true,false)
      detectMultilineNavigation()
    })))
        
    __rsu._method('render',this,self,false,function(){return (XmlElement("div",[{name:"class",value:("stack-navigator")}],[XmlText("\n        "),(XmlElement("div",[{name:"class",value:("stack-navigator-toolbar")}],[XmlText("\n          "),(XmlElement("div",[{name:"class",value:("breadcrumb")}],[])),XmlText("\n          "),(XmlElement("div",[{name:"class",value:("controls")}],[])),XmlText("\n        ")])),XmlText("\n        "),(XmlElement("div",[{name:"class",value:("components")}],[])),XmlText("\n      ")]))});
    
  }).apply(this,[])}}
  
  __rsu._class('StackChild',this,self,StackChild,StackChild$class);function StackChild(){return __rsu._construct(this,'StackChild',StackChild$class,arguments.callee,arguments);};function StackChild$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function StackChild$ctor(){
    self.Path = StackNavigator.Path
    self.Command = StackNavigator.Command
    self.Redirect = StackNavigator.Redirect
    
    __rsu._object('State',this,self,State,State$object);function State(){return __rsu._construct(this,'State',State$class,arguments.callee,arguments);};function State$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function State$object$ctor(){
      __rsu._method('unapply',this,self,false,function(obj,wildcard,extractor){
        if(wildcard || extractor.length != 3) return null
        return extractor(obj.depth,obj.totalWidth,obj.availableWidth)
      });
    }).apply(this,[])}}
    
    self.currentPath = null
    self.currentControl = null
    self.currentLeft = null
    self.preferredWidth = null
    self.widthChanged = false
    self.controlChanged = false
    self.navigator = null
    
    __rsu._method('changeState',this,self,false,function(state){
      var result = createView(state)
      var preferredWidth = isInstanceOf(result,Component)? state.totalWidth:result.width
      var currentControl = isInstanceOf(result,Component)? result:result.control
    
      /*mark the component if it changed visually*/
      self.widthChanged = self.widthChanged || preferredWidth != self.preferredWidth
      self.controlChanged = self.controlChanged || currentControl != self.currentControl
      
      self.preferredWidth = preferredWidth
      self.currentControl = currentControl
      
      /*if(self.preferredWidth <= 0) error("the width of a rendered StackChild must be greated than 0")*/
      if(self.preferredWidth < 0) self.preferredWidth = 0
        
      return self
    });
    
    self.subPathNavigated = Event(self)
    
    self.label = BoundValue({value:null}).change(detectMultilineNavigation)
    self.controls = BoundValue({value:null}).change(detectMultilineNavigation)
    
    function detectMultilineNavigation(){
      if(self.navigator != null){
        setTimeout(self.navigator.detectMultilineNavigation,500)
      }
    }
    
    __rsu._method('render',this,self,false,function(){
      if(self.settings.type=="canvas"){
        self.container = Container({width:"0px"})
        self.content = self.container.jquery
      } else {
        self.container = ScrollableContainer({width:"0px",classNames:"stack-child-scrollable-container"})
        self.content = self.container.scrollableContent
        self.scrollableContainer = self.container
      }
      return (XmlElement("div",[{name:"class",value:("stack-child")}],[XmlJavascriptFragment(self.container)]))
    });
    
    __rsu._method('moveIntoPlace',this,self,false,function(){
      var animationComplete = (function(){
        if(self.widthChanged) self.container.jquery().css({width:self.preferredWidth})
        if(self.controlChanged){
          if(self.scrollableContainer) self.scrollableContainer.scrollToY(0)
          LoadingMessage().appendTo(self.content().empty())
          setTimeout((function(){ self.currentControl.appendTo(self.content().empty()) }),50)
        }
        self.widthChanged = false
        self.controlChanged = false
      })
      jquery().animate({left:self.currentLeft,width:self.preferredWidth},250,animationComplete)
    });
    
    __rsu._abstractMethod('createView',this,self);
  }).apply(this,[])}}
  
  __rsu._class('DefaultStackChild',this,self,DefaultStackChild,DefaultStackChild$class);function DefaultStackChild(){return __rsu._construct(this,'DefaultStackChild',DefaultStackChild$class,arguments.callee,arguments);};function DefaultStackChild$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,StackChild,StackChild$class,[settings]);with(self){(function DefaultStackChild$ctor(){
    label(self.settings.label)
    var control = Container()(Label("Place Holder: DefaultStackChild"))
    __rsu._method('createView',this,self,false,function(state){return ( control )});
  }).apply(this,[])}}
}).apply(this,[])}})
}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs280_ = {};with(this){with(_rs280_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){
  __rsu._object('UiTools',this,self,UiTools,UiTools$object);function UiTools(){return __rsu._construct(this,'UiTools',UiTools$class,arguments.callee,arguments);};function UiTools$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function UiTools$object$ctor(){
    __rsu._method('ensureUnits',this,self,false,function(value,unitType){return ( (typeOf(value) == Number)? value+(unitType || "px") : value )});
    
    /*get a jquery reference to a Component, element by id, or existing jquery reference or element*/
    __rsu._method('jquery',this,self,false,(__rsu._partialFunction(
      function(c){return (isInstanceOf(c,Component))?function(){return ( c.jquery())}:null}
      ,function(id){return (isInstanceOf(id,String))?function(){return ( $("#"+id))}:null}
      ,function(elem){return function(){return ( $(elem)
    )}})));
    
  }).apply(this,[])}}
  
  __rsu._object('QueryString',this,self,QueryString,QueryString$object);function QueryString(){return __rsu._construct(this,'QueryString',QueryString$class,arguments.callee,arguments);};function QueryString$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function QueryString$object$ctor(){
    __rsu._method('decode',this,self,false,function(value){return ( value == null? value:unescape(value) )});
    __rsu._method('param',this,self,false,function(name){return ( params(name).headOption() )});
    __rsu._method('params',this,self,false,function(name){return ( from(location.search.substring(1).split("&")).map(function(_rs2810_){return (_rs2810_.split("="))}).filter(function(_rs2811_){return (_rs2811_[0] == name)}).map(function(_rs2812_){return (_rs2812_[1])}).map(decode) )});
  }).apply(this,[])}}
  
}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs450_ = {};with(this){with(_rs450_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._import('rescripted.collections',rescripted.collections,'_',_rs450_)
__rsu._import('rescripted.xml',rescripted.xml,'_',_rs450_)
__rsu._import('rescripted.ui',rescripted.ui,'_',_rs450_)

__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){

  __rsu._class('ViewStack',this,self,ViewStack,ViewStack$class);function ViewStack(){return __rsu._construct(this,'ViewStack',ViewStack$class,arguments.callee,arguments);};function ViewStack$class(settings,viewStackType){var self = __rsu._self(this);var base = __rsu._extend(this,self,Container,Container$class,[settings]);with(self){(function ViewStack$ctor(){
    viewStackType = viewStackType || "viewstack"

    var _selectedIndex = self.settings.selectedIndex || 0
    
    self.change = Event(self)
    
    function showChild(index){
      return (function(){
        _selectedIndex = index
        var child = children(index)
        var toHide = jquery("> ."+viewStackType+"-children > ."+viewStackType+"-child.selected")
        var toShow = jquery("> ."+viewStackType+"-children > ."+viewStackType+"-child.child"+index)
        
        if(toShow.hasClass("lazy")){
         	child.appendTo(toShow)
        	toShow.removeClass("lazy")
        }
        
        toHide.removeClass("visible").removeClass("selected")
        toShow.addClass("visible").addClass("selected")
        
        change.invoke(child,_selectedIndex)
      })
    }

    __rsu._method('bindData',this,self,false,function(){
      var index = 0
      return from(self.children).map(function(child){
        return ({label:child.settings.label,action:showChild(index++)})
      })
    });
    
    __rsu._method('selectedIndex',this,self,false,function(index){
      if(arguments.length > 0) showChild(index)()
      return _selectedIndex
    });
    
    __rsu._method('selectedChild',this,self,false,function(){ return children(_selectedIndex) });
    
    __rsu._method('body',this,self,false,function(){ return childContainer() });
    
    __rsu._method('childContainer',this,self,false,function(){
      var index = 0;
      return (XmlElement("div",[{name:"class",value:(viewStackType+'-children')}],[XmlText("\n        "),XmlJavascriptFragment(
          from(self.children).map(function(child){
            var className = List(viewStackType+'-child',"child"+index,index == 0?'visible':'',(index++ == _selectedIndex)?'selected':'',"lazy").filter((function(_rs45196_){return (_rs45196_!='')})).mkString(" ")
            return (XmlElement("div",[{name:"class",value:(className)}],[]))
          })
        ),XmlText("\n        ")]))
    });
    
    domInserted(function(){ selectedIndex(_selectedIndex) })
    
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:(viewStackType+'-container')}],[XmlText("\n          "),XmlJavascriptFragment(body()),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
  
  __rsu._class('TabContainer',this,self,TabContainer,TabContainer$class);function TabContainer(){return __rsu._construct(this,'TabContainer',TabContainer$class,arguments.callee,arguments);};function TabContainer$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Container,Container$class,[settings]);with(self){(function TabContainer$ctor(){
    var showChildEffect = self.settings.showChildEffect || (function(onComplete,toHide,toShow){
      toHide.removeClass("visible")
      toShow.addClass("visible")
      onComplete()
    })

    var selectedIndex = self.settings.selectedIndex || 0

    var tabcontrols = BoundValue({value:null})
    
    function tabs(){
      var index = 0;
      return self.children.map(function(tab){
        return Button({label:tab.settings.label,classNames:["tab-button",(index%2==0?"even":"odd"),"child"+index,(index == selectedIndex)?'selected':'']}).click(showChild(index++))
      })
    }
    
    function showChild(index){
      return (function(){
        selectedIndex = index
        var child = children(index)
        
        var toHide = jquery("> .tab-children > .tab-child.selected")
        var toShow = jquery("> .tab-children > .tab-child.child"+index)
        
        if(toShow.hasClass("lazy")){
         	child.appendTo(toShow)
        	toShow.removeClass("lazy")
        }

        tabcontrols(child.settings.controls)
        
				showChildEffect(
					(function(){toHide.removeClass("selected");toShow.addClass("selected")}),
					toHide,toShow,jquery()
				)
			 
				
        jquery("> .tab-list > .tab-button.selected").removeClass("selected")
        jquery("> .tab-list > .tab-button.child"+index).addClass("selected")
      })
    }
    
    function tabBodies(){
      var index = 0;
      return from(self.children).map(function(child){
        var isSelected = index == selectedIndex
      	var className = List('tab-child',"child"+index, (isSelected)?'selected':'',"lazy").filter(function(_rs45197_){return (_rs45197_!='')}).mkString(" ")
        
      	index++

        return (XmlElement("div",[{name:"class",value:(className)}],[]))
      })
    }
    
    domInserted(function(){ showChild(selectedIndex)() })
    
    __rsu._method('render',this,self,true,function(){
      return (XmlElement("div",[{name:"class",value:("tab-container")}],[XmlText("\n          "),(XmlElement("div",[{name:"class",value:("tab-list")}],[XmlText("\n            "),XmlJavascriptFragment(tabs()),XmlText("\n          ")])),XmlText("\n          "),(XmlElement("div",[{name:"class",value:("tab-controls")}],[XmlText("\n            "),XmlJavascriptFragment(tabcontrols),XmlText("\n          ")])),XmlText("\n          "),(XmlElement("div",[{name:"class",value:("tab-children")}],[XmlText("\n            "),XmlJavascriptFragment(tabBodies()),XmlText("\n          ")])),XmlText("\n        ")]))
    });
  }).apply(this,[])}}
  
  __rsu._class('Wizard',this,self,Wizard,Wizard$class);function Wizard(){return __rsu._construct(this,'Wizard',Wizard$class,arguments.callee,arguments);};function Wizard$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,ViewStack,ViewStack$class,[settings,"wizard"]);with(self){(function Wizard$ctor(){
    var controls = BoundValue({value:null})
    var title = BoundValue({value:self.settings.title})
    
    self.finish = Event(self)
    
    change(function(child,index){
      title(child.settings.title || self.settings.title)
      controls(child.settings.controls)
      if(child.settings.controls){
        jquery(".wizard-controls").show()
      } else {
        jquery(".wizard-controls").hide()
      }
    })
    
    __rsu._method('selectedIndex',this,self,true,function(index){
      if(arguments.length > 0){
        if(index > 0) jquery(".previous-button").show()
        else jquery(".previous-button").hide()
        
        if(index < children.size() - 1) jquery(".next-button").show()
        else jquery(".next-button").hide()
        
        if(index == children.size() - 1) jquery(".finish-button").show()
        else jquery(".finish-button").hide()
      }
      
      return base.selectedIndex(index)
    });
    
    function moveForward(action){
      return (function(){
        var errorMessages = Option(selectedChild().settings.validator).map(function(_rs45198_){return (_rs45198_.validationErrors())}).getOrElse(List())
        
        if(errorMessages.size() == 0)
          return action()

        ToolTip({classNames:"error",styles:{"max-width":"400px"}})(XmlElement("ul",[],[XmlJavascriptFragment( errorMessages.map(function(message){return ( (XmlElement("li",[],[XmlJavascriptFragment(message)])))}) )])).showFor(this,"top-right")
      })
    }
    
    __rsu._method('navigationControls',this,self,false,function(){
      return List(
        Button({label:"Previous",classNames:"previous-button"}).click(function(){ selectedIndex(base.selectedIndex() - 1)}),
        Button({label:"Next",classNames:"next-button highlight"}).click(moveForward(function(){ selectedIndex(base.selectedIndex() + 1)})),
        Button({label:self.settings.finishLabel || "Finish",classNames:"finish-button highlight pulse"}).click(moveForward(function(){ self.finish.invoke() }))
      )
    });
    
    __rsu._method('body',this,self,true,function(){
      return List(
        (XmlElement("h1",[{name:"class",value:("wizard-title")}],[XmlJavascriptFragment(title)])),
        (XmlElement("div",[{name:"class",value:("wizard-control-container")}],[XmlText("\n            "),(XmlElement("div",[{name:"class",value:("wizard-controls")}],[XmlJavascriptFragment(controls)])),XmlText("\n            "),(XmlElement("div",[{name:"class",value:("wizard-navigation")}],[XmlJavascriptFragment(navigationControls())])),XmlText("\n          ")])),
        childContainer()
      )
    });
  }).apply(this,[])}}
  
}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);(function(){var self = this;var _rs510_ = {};with(this){with(_rs510_){(function(){var __rsu = __rescripted.util;var from = __rsu.from;var match = __rsu.match;var typeOf = __rsu.typeOf;var isInstanceOf = __rsu.isInstanceOf;__rsu._import('rescripted.collections',rescripted.collections,'_',_rs510_)
__rsu._import('rescripted.xml',rescripted.xml,'_',_rs510_)

__rsu._package('rescripted.ui',this,function(){var self = this;with(this){(function(){

  __rsu._object('PropertyBinding',this,self,PropertyBinding,PropertyBinding$object);function PropertyBinding(){return __rsu._construct(this,'PropertyBinding',PropertyBinding$class,arguments.callee,arguments);};function PropertyBinding$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function PropertyBinding$object$ctor(){
    __rsu._method('create',this,self,false,function(args){
      var propertiesList = List.fromArray(args)
      var obj = propertiesList(0);
      propertiesList = propertiesList.drop(1)
      var lastProp = propertiesList(propertiesList.size() - 1)
      propertiesList = propertiesList.take(propertiesList.size() - 1)
      
      return (function(value){
        if(arguments.length == 0){
          var current = obj
          from(propertiesList).foreach(function(prop){
            if(current == null) return; /*in a for comprehension, return acts like continue, will probably need to fix that...*/
            current = current[prop]
          })
          return (current == null)?null:current[lastProp];
        } else if(arguments.length == 1) {
          var current = obj
          from(propertiesList).foreach(function(prop){
            if(!(prop in current)) current[prop] = {}
            current = current[prop]
          })
          current[lastProp] = value
          return value;          
        }
      })
    });
  }).apply(this,[])}}
    
  __rsu._class('Event',this,self,Event,Event$class);function Event(){return __rsu._construct(this,'Event',Event$class,arguments.callee,arguments);};function Event$class(component){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function Event$ctor(){
    self.listeners = List()
    
    __rsu._method('size',this,self,false,function(){return ( self.listeners.size() )});
    
    __rsu._method('add',this,self,false,function(func){ self.listeners.append(func) });
    __rsu._method('remove',this,self,false,function(func){ self.listeners = self.listeners.filter(function(_rs51142_){return (_rs51142_ != func)}) });
    
    __rsu._method('invoke',this,self,false,function(){
      var args = arguments;
      from(self.listeners).foreach(function(func){
        try{ func.apply(null,args) } catch(e) {logError(e)}
      })
    });
    
    __rsu._method('apply',this,self,false,function(func){add(func); return component});
    
    self.valueHandler = (function(){ self.invoke(this.value) })
  }).apply(this,[])}}

  __rsu._object('Component',this,self,Component,Component$object);function Component(){return __rsu._construct(this,'Component',Component$class,arguments.callee,arguments);};function Component$object(){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function Component$object$ctor(){
    var currentId = 0
    __rsu._method('nextId',this,self,false,function(){return ( currentId++ )});
  }).apply(this,[])}}

  __rsu._class('Component',this,self,Component,Component$class);function Component(){return __rsu._construct(this,'Component',Component$class,arguments.callee,arguments);};function Component$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function Component$ctor(){
    self.settings = settings || {}
    self.componentId = self.settings.id || "componentId"+Component.nextId()
    self.classNames = self.settings.classNames
    self.styles = self.settings.styles
    self.domInserted = Event(self)
    
    __rsu._method('domMeasured',this,self,false,function(func){
      return self.domInserted(function(node){
        var count = 0;
        var timeWindow = 125
        setTimeout((function(){
          if(timeWindow < 2000) timeWindow *= 2;
          /*println(self.componentId+": "+node.clientWidth+"x"+node.clientHeight+" - "+(count++)+" - "+timeWindow)*/
          if(node.clientWidth == 0 && node.clientHeight == 0){ setTimeout(arguments.callee,timeWindow) }
          else{ func(node) }
        }),timeWindow)
      })
    });
    
    if(self.settings.captureRef) self.settings.captureRef(self)

    __rsu._method('settingsWithDefaults',this,self,false,function(o){
      var result = __rescripted.util.merge(self.settings,{});
      for(var property in o)
        if(!(property in result))
          result[property] = o[property]
      return result
    });

    __rsu._method('bindRef',this,self,false,function(){
      PropertyBinding.create(arguments)(self)
      return self
    });

    __rsu._method('element',this,self,false,function(){return ( document.getElementById(self.componentId) )});

    __rsu._method('toXmlNode',this,self,false,function(){
      
      /*every control has an id*/
      var result = self.render().update('id',self.componentId)
      
      /*every control supports adding in classNames*/
      result.update('class',List(self.classNames,result('class')).flatten().filter(function(_rs51143_){return (_rs51143_!='')}).filter(function(_rs51144_){return (_rs51144_!=null)}).mkString(" "))

      /*support explicit width and height on all controls*/
      var width = Option(self.settings.width).map(UiTools.ensureUnits).map(function(width){return ( "width:"+width+";")})/*max-width:"+width+"!important;min-width:"+width+"!important;*/
      var height = Option(self.settings.height).map(UiTools.ensureUnits).map(function(height){return ( "height:"+height+";")})/*max-height:"+width+"!important;min-height:"+width+"!important;*/
      var style = List(self.styles,width,height,result('style')).flatten().filter(function(_rs51145_){return (_rs51145_!=null)}).map(__rsu._partialFunction(
        function(s){return (isInstanceOf(s,String))?function(){return ( s)}:null}
        ,function(o){return (isInstanceOf(o,Object))?function(){return ( Map(o).map(function(item){return ( item[0]+":"+item[1]+";")}).mkString(""))}:null}
        ,function(other){return function(){return ( other
      )}})).filter(function(_rs51146_){return (_rs51146_!='')}).mkString("")
      if(style!='') result.update('style',style)
      
      /*trigger domInserted event if necessary*/
      if(self.domInserted.size() > 0){
        var timeWindow = 125;
        setTimeout((function(){
          var componentNode = element()
          if(componentNode == null){
            timeWindow *= 2
            if(timeWindow > 16000){
              alert("failure to detect dom insertion for component with id:" +self.componentId)
              return;
            }
            setTimeout(arguments.callee,timeWindow)
          } else {
            self.domInserted.invoke(componentNode)
          }
        }),timeWindow)
      }
      
      return result;
    });
    
    __rsu._abstractMethod('render',this,self);
    
    __rsu._method('remove',this,self,false,function(){
      self.jquery().remove()
      return self
    });
    
    __rsu._method('appendTo',this,self,false,function(parent){
      remove()
      var node = self.toXmlNode().appendTo(parent)
      return self;
    });

    __rsu._method('jquery',this,self,false,function(){return ( (arguments.length == 0)? $("#"+self.componentId):$(arguments[0],$("#"+self.componentId)) )});
  }).apply(this,[])}}
  
  __rsu._class('Container',this,self,Container,Container$class);function Container(){return __rsu._construct(this,'Container',Container$class,arguments.callee,arguments);};function Container$class(settings){var self = __rsu._self(this);var base = __rsu._extend(this,self,Component,Component$class,[settings]);with(self){(function Container$ctor(){
    self.children = ArraySeq()
    
    __rsu._method('apply',this,self,false,function(){
      self.children = Seq.fromArray(arguments).flatten()
      return self
    });
    
    __rsu._method('render',this,self,true,function(){return (XmlElement("div",[{name:"class",value:("container")}],[XmlJavascriptFragment(self.children)]))});
  }).apply(this,[])}}
  
  __rsu._method('metaViewport',this,self,false,function(settings){ (XmlElement("meta",[{name:"content",value:(settings)},{name:"id",value:("viewport")},{name:"name",value:("viewport")}],[])).appendTo($("head")) });
  
  __rsu._method('useBodyScroll',this,self,false,function(){ $("body").addClass("use-body-scroll") });
  
  __rsu._method('isAndroid',this,self,false,function(){return ( navigator.userAgent.toLowerCase().indexOf("android") != -1 )});

  __rsu._method('isAndroidMobile',this,self,false,function(){
    var uagent = navigator.userAgent.toLowerCase();
    return uagent.indexOf("android") != -1 && uagent.indexOf("mobile") != -1
  });
  __rsu._method('isAndroidTablet',this,self,false,function(){
    var uagent = navigator.userAgent.toLowerCase();
    return uagent.indexOf("android") != -1 && uagent.indexOf("mobile") == -1
  });
  
  __rsu._method('isWebOS',this,self,false,function(){return ( navigator.userAgent.toLowerCase().indexOf("webos") != -1 )});

  __rsu._method('isIOS',this,self,false,function(){
    var uagent = navigator.userAgent.toLowerCase();
    return uagent.indexOf("ios") != -1 || uagent.indexOf("iphone") != -1 || uagent.indexOf("ipad") != -1 || uagent.indexOf("ipod") != -1
  });
  
  __rsu._method('hasSvg',this,self,false,function(){return (
    document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0") ||
    document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
  )});
  
  __rsu._method('hasVml',this,self,false,function(){
    if(typeof hasVml.supported == "undefined") {
      var a = document.body.appendChild(document.createElement('div'));
      a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
      var b = a.firstChild;
      b.style.behavior = "url(#default#VML)";
      hasVml.supported = b ? typeof b.adj == "object": true;
      a.parentNode.removeChild(a);
    }
    return hasVml.supported
  });
  
  __rsu._method('hasVectorSupport',this,self,false,function(){return ( (hasSvg() || hasVml()) && !isIOS() )});
  
  __rsu._method('isMobileBrowser',this,self,false,function(){
    if(location.search.indexOf("mobile=false")!=-1)
      return false;
    if(location.search.indexOf("mobile=true")!=-1)
      return true;
    var mobileDevices = ["iphone","ipod","webos","android","ipad"];/*"mobile"?*/
    var uagent = navigator.userAgent.toLowerCase();
    /*alert(uagent);*/
    for(var i=0;i<mobileDevices.length;i++){
      if(uagent.indexOf(mobileDevices[i])!=-1)
        return true;
    }
    return false;
  });
  
  __rsu._method('mobileViewports',this,self,false,function(settings){
    settings = settings || {}
    if(isMobileBrowser()){
      if(isWebOS() || isAndroidMobile() || screen.width <= 600 || screen.height <= 320){
        /*iphones, android phones, any webos device (tablets included)*/
        useBodyScroll()
        metaViewport(settings.phone || "width=650")
        
        $("body").addClass("phone")
        
      } else {
        /*ipad, android tablets*/
        metaViewport(settings.tablet || "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no")
        
        $("body").addClass("tablet")
        
      }
    } else {
      /*pc*/
      $("body").addClass("desktop")
      
    }
  });
  
  __rsu._class('DelayedAction',this,self,DelayedAction,DelayedAction$class);function DelayedAction(){return __rsu._construct(this,'DelayedAction',DelayedAction$class,arguments.callee,arguments);};function DelayedAction$class(delayInMillis,action){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function DelayedAction$ctor(){
    
    var timeoutHandle = -1
    
    __rsu._method('apply',this,self,false,function(){
      if(timeoutHandle != -1) clearTimeout(timeoutHandle)
      timeoutHandle = setTimeout((function(){ 
        timeoutHandle = -1
        action()
      }),delayInMillis)
    });
    
  }).apply(this,[])}}
  
  __rsu._class('FrequencyThrottle',this,self,FrequencyThrottle,FrequencyThrottle$class);function FrequencyThrottle(){return __rsu._construct(this,'FrequencyThrottle',FrequencyThrottle$class,arguments.callee,arguments);};function FrequencyThrottle$class(maxFrequencyInMillis){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function FrequencyThrottle$ctor(){
    
    var timeoutHandle = -1
    var queuedAction = null
    
    function checkForAction(){
      timeoutHandle = -1
      if(queuedAction != null){
        queuedAction()
        queuedAction = null
        timeoutHandle = setTimeout(checkForAction,maxFrequencyInMillis)
      }
    }
    
    __rsu._method('apply',this,self,false,function(action){
      if(timeoutHandle == -1){
        action()
        timeoutHandle = setTimeout(checkForAction,maxFrequencyInMillis)
      } else {
        queuedAction = action
      }
    });
  }).apply(this,[])}}

  __rsu._class('DataSource',this,self,DataSource,DataSource$class);function DataSource(){return __rsu._construct(this,'DataSource',DataSource$class,arguments.callee,arguments);};function DataSource$class(source){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function DataSource$ctor(){
    self.load = match(source)(__rsu._partialFunction(
      function(seq){return (isInstanceOf(seq,Seq))?function(){return ( (function(callback){callback(seq)}))}:null}
      ,function(array){return (isInstanceOf(array,Array))?function(){return ( (function(callback){callback(array)}))}:null}
      ,function(func){return (isInstanceOf(func,Function))?function(){return ( func)}:null}
      ,function(other){return function(){return ( (function(callback){callback([])})
    )}}))
    
    __rsu._method('apply',this,self,false,function(dataCallback,errorCallback){
      load(dataCallback,errorCallback)
    });
  }).apply(this,[])}}
  
  __rsu._class('DataSourceCache',this,self,DataSourceCache,DataSourceCache$class);function DataSourceCache(){return __rsu._construct(this,'DataSourceCache',DataSourceCache$class,arguments.callee,arguments);};function DataSourceCache$class(action){var self = __rsu._self(this);var base = __rsu._extend(this,self,__rescripted.RescriptedObject,__rescripted.RescriptedObject,[]);with(self){(function DataSourceCache$ctor(){
    
    var errored = false
    var loaded = false
    var results = null
    
    __rsu._method('invalidate',this,self,false,function(){
      errored = false
      loaded = false
      results = false
    });
    
    __rsu._method('apply',this,self,false,function(dataCallback,errorCallback){
      if(loaded) {
        dataCallback(results)
      } else if(errored){
        errorCallback(results)
      } else {
        action(
          (function(response){
            loaded = true
            results = response
            dataCallback(results)
          }),
          (function(errorResponse){
            loaded = true
            results = response
            errorCallback(results)
          })
        )
      }
    });
    
  }).apply(this,[])}}
  
  
}).apply(this,[])}})}).apply(__rescripted.script.root,[]);}}}).apply(__rescripted.script.root,[]);