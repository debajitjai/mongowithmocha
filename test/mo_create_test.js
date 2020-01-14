// this file runs the create test

// need the scehema
const Profile = require("../app/profile.js")
const assert = require("assert")

describe("Create record to Mongodb (CRUD#1)", ()=>{
    it("Create user in DB", ()=>{
        //assert(true);
        // create a profile varibale to write to db
        var profile_var = new Profile;
        profile_var.name="john";
        profile_var.yearsofexp=10;
        profile_var.joined=new Date;
        profile_var.save()
            .then(()=>{
                assert(!profile_var.isNew)
            })
            .catch((error)=>{
                console.log("Create record to the Mongodb errored: ",error);
            })

    });
});