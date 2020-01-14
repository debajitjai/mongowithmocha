// need the scehema
const Profile = require("../app/profile.js")
const assert = require("assert")

describe("Update record in Mongodb (CRUD#3)", ()=>{
    //revisit this regarding the scope of profile_var
    let profile_for_update;
    var preupdate_name = "test_update_user_pre";
    var postupdate_name= "test_update_user_post";

    beforeEach("Create test_user in DB", (done)=>{
        //assert(true);
        // create a profile varibale to write to db
        profile_for_update = new Profile;
        profile_for_update.name=preupdate_name;
        profile_for_update.yearsofexp=10;
        profile_for_update.joined=new Date;
        profile_for_update.save()
            .then(()=>{
                done();
            })
            .catch((error)=>{
                console.log("Create record to the Mongodb errored: ",error);
            })
    })
    it("update user profile", (done)=>{
        profile_for_update.set({name:postupdate_name});
        profile_for_update.save()
            .then(()=>{ 
                Profile.findById(profile_for_update._id.toString())
                .then((ret_profile)=>{
                    assert(ret_profile.name!=preupdate_name);
                    assert(ret_profile.name==postupdate_name);
                    done();
                })
            })
    })
})