import { NgModule } from '@angular/core'
import { DemoComponent } from './demo.component'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Angular2ImageGalleryModule } from 'angular2-image-gallery'
import { HttpClientModule } from '@angular/common/http'
import { NgxSliderModule } from '@angular-slider/ngx-slider'
import { HammerModule } from '@angular/platform-browser'

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Angular2ImageGalleryModule,
    HammerModule,
    NgxSliderModule,
  ],
  providers: [],
  bootstrap: [DemoComponent],
  exports: [],
})
export class GalleryDemoModule {}
