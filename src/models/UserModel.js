const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    UserName : {type:String, required:true},
    PhoneNumber : {type:String, required:true},
    Email:{type:String,required:true, unique:true},
    Password:{type:String,required:true},
    Role:{type:String,required:true}
},
{
    timestamps:true,
    versionKey:false
})


userSchema.pre("save",function(next){

    if(!this.isModified("Password"))return next();

    var hash = bcrypt.hashSync(this.Password, 8);

    this.Password = hash;
    return next();

})

userSchema.methods.comparePassword = function(Password){

    return bcrypt.compareSync(Password,this.Password);

}

const User = mongoose.model("user", userSchema);

module.exports = User;