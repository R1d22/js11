const info = {
    name: 'yehor',
    surname: 'rudenko',
    lastname: 'uriiovitch',
    get fullname() {
        return `${this.name} ${this.surname} ${this.lastname}`
    },
    set fullname(val) {
        this.fullname = val;
    }
};
console.log(info.fullname);

