const 
    mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    Schema = mongoose.Schema;

const userSchema = new Schema( {
    username: {
        type:String, 
        max: [32, 'Too long, max is 32 characters'],
        min: [4, 'Too short, min is 4 characters']
    },
    email: {
        type:String, 
        max: [32, 'Too long, max is 32 characters'],
        min: [4, 'Too short, min is 4 characters'],
        useCreateIndex: true,
        required: 'Email is required', 
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type:String, 
        required: true, 
        min: [4, 'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 32 characters']
    },
    rentals: [{type: Schema.Types.ObjectId, ref: 'Rental;'}]
});

userSchema.methods.hasSamePasssword = function(requestedPassword) {
    return bcrypt.compareSync(requestedPassword,this.password);
}

userSchema.pre('save', function(next) {
    const user = this;
    bcrypt.genSalt(10,function(err,salt) {
        bcrypt.hash(user.password,salt,function(err,hash) {
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User',userSchema)