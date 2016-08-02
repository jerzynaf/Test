define(["require", "exports"], function (require, exports) {
    "use strict";
    (function (DeviceType) {
        DeviceType[DeviceType["Mobile"] = 0] = "Mobile";
        DeviceType[DeviceType["Tablet"] = 1] = "Tablet";
        DeviceType[DeviceType["Desktop"] = 2] = "Desktop";
    })(exports.DeviceType || (exports.DeviceType = {}));
    var DeviceType = exports.DeviceType;
});
//# sourceMappingURL=SystemEnums.js.map