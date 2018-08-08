"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var canvas_painter_component_1 = require("./canvas-painter/canvas-painter.component");
var PainterLibraryModule = /** @class */ (function () {
    function PainterLibraryModule() {
    }
    PainterLibraryModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        canvas_painter_component_1.CanvasPainterComponent
                    ],
                    exports: [
                        canvas_painter_component_1.CanvasPainterComponent
                    ]
                },] },
    ];
    return PainterLibraryModule;
}());
exports.PainterLibraryModule = PainterLibraryModule;
//# sourceMappingURL=painter-library.module.js.map