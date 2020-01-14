// need the scehema
const Profile = require("../app/profile.js")
const assert = require("assert")

describe("Delete record from Mongodb (CRUD#4)", ()=>{
    //revisit this regarding the scope of profile_var
    //let profile_for_delete;

    beforeEach("Create test_user in DB", (done)=>{
        //assert(true);
        // create a profile varibale to write to db
        var profile_for_delete = new Profile;
        profile_for_delete.name="delete_test_user";
        profile_for_delete.yearsofexp=10;
        profile_for_delete.joined=new Date;
        profile_for_delete.save()
            .then(()=>{
                done();
            })
            .catch((error)=>{
                console.log("Create record to the Mongodb errored: ",error);
            })
    })
    it("Delete user profile", (done)=>{
        Profile.findOneAndDelete({name:"delete_test_user"})
            // this then needs to have call back function in one line, or else ret_profile in next then in chaining will not work
            .then(()=>{ Profile.findOne({name:"delete_test_user"})})
            .then(ret_profile=>{
                assert(ret_profile == null)
                done();
            })
            .catch((error)=>{
                console.log("assert errored: ",error);
            })
    })
})