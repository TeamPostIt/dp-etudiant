/**
 * Created by rdehu on 10/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    'use strict';

    self.Gender = {Mr: 1};
    self.Contact = function (gender, firstname, lastname) {
        var firstName, lastName, g, id, mails=[], phones=[];

       /* 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        };*/

        this.gender = function () {
            return g;
        };

        this.firstName = function () {
            return firstName;
        };

        this.lastName = function () {
            return lastName;
        };

        this.add_mail = function (mail) {
            mails.push(mail);
        };

        this.add_phone = function (phone) {
            phones.push(phone);
        };

        this.mails = function(){
            return mails;
        };

        this.phones = function(){
            return phones;
        };


        var init = function (gender, firstname, lastname) {
            lastName = lastname;
            firstName = firstname;
            g = gender;
        };

        init(gender, firstname, lastname);
    };


    return self;
}(Contact || {}));