// need the scehema
const Profile = require("../app/profile.js")
const assert = require("assert")

describe("Read record from Mongodb (CRUD#2)", ()=>{
    //revisit this regarding the scope of profile_var
    var profile_var = new Profile;

    beforeEach("Create test_user in DB", (done)=>{
        //assert(true);
        // create a profile varibale to write to db
        profile_var.name="test_read_user";
        profile_var.yearsofexp=10;
        profile_var.joined=new Date;
        profile_var.save()
            .then(()=>{
                done();
            })
            .catch((error)=>{
                console.log("Create record to the Mongodb errored: ",error);
            })
    })
    it("Read user profile", (done)=>{
        Profile.find({name:"test_read_user"})
            .then((ret_profiles)=>{
                assert(profile_var._id.toString()===ret_profiles[0]._id.toString());
                done();
            })
    })
})