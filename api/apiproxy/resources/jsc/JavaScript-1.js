if(context.getVariable("in.username") != "username" || 
context.getVariable("in.password") != "password"){
    
    context.setVariable("raiseunauthorizederror", "true")
}