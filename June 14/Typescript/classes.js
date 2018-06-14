var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var school = (function () {
    function school(name) {
        this.schoolName = name;
    }
    return school;
}());
var student = (function (_super) {
    __extends(student, _super);
    function student(name, roll, schoolName) {
        var _this = _super.call(this, schoolName) || this;
        _this.name = name;
        _this.rollnum = roll;
        return _this;
    }
    return student;
}(school));
var student1 = new student('nitin', 12, 'ABC school');
//# sourceMappingURL=classes.js.map