import { NgModule } from "@angular/core";
import { MaterialModule } from "@app/shared/material/material.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
    ],
})


export class LayoutModule { }