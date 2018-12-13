const user = {};
function addProperty(obj) {
    Object.defineProperties(obj, {
        fullName: {
            get() {
                return this.fullName1;
            },
            set(x) {
                // regExp => first letter in word
                this.fullName1 = x.toLowerCase().replace(/\b\w/g, letter => letter.toUpperCase());
            },
        },
        phone: {
            get() {
                return this.phone1;
            },
            set(x) {
                // regExp => first plus on string and numbers
                this.phone1 = x.match(/^\+[\d]*|\d/g).join('');
            },
        },
    });
}

addProperty(user);
user.fullName = 'aNna-mAria joHNs';
console.log(user.fullName);

user.phone = '+38(096)-111-22-33';
console.log(user.phone);
user.phone = '38(096)+111b22+33';
console.log(user.phone);
