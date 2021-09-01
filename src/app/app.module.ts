import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ArtistItemComponent } from './artist-item/artist-item.component';
import { SearchArtistsPipe } from './search-artists.pipe';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
  declarations: [AppComponent, ArtistItemComponent, SearchArtistsPipe, ArtistDetailsComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
