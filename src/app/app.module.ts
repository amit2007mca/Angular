import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { DemoPipePipe } from "./demo.pipe";
import { DescPipe } from "./pipe/desc.pipe";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, DemoPipePipe, DescPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
