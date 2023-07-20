# Angular lifecyclcle hooks
    constructor
    ngOnChanges
    ngOnInit
    ngDoCheck
        ngAfterContentInit
        ngAfterContentChecked
        ngAfterViewInit
        ngAfterViewChecked
    ngOnDestory

## ngOnChanges
Triggers every time changes are detected in one of the component's input properties. Receives ```SimpleChanges``` object as parameter. It contains information about the input properties has changed. 

If there's no input in the component, the framework won't call this hook.

## ngOnInit

This method is called only once during the component lifecycle, after the first ```ngOnChanges``` call if there exists any. It's called after the initilization aka constructor call. In this hook, we can set requests to server to load content, maybe create a ```Formgroup``` for a form to be handled by the component, set subscriptions. Bottom line, any kind of initializations.

## ngDoCheck

An "extension" of ```ngOnChanges```. It's called when any kind of change is detected in a component.Since, it's frequency is enormous so we should be careful when to use it. It starts to operate after ```ngOnChanges``` and ```ngOnInit``` hooks.


source:
    1. https://indepth.dev/posts/1494/complete-guide-angular-lifecycle-hooks
    2. https://angular.io/guide/lifecycle-hooks