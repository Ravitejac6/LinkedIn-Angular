import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ArtistItemComponent } from './artist-item/artist-item.component';
import { SearchArtistsPipe } from './search-artists.pipe';

@NgModule({
  declarations: [AppComponent, ArtistItemComponent, SearchArtistsPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
