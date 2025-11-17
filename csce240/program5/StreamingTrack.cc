//COPYRIGHT 2025 aweaver

#include <string>
using std::string;
#include "SongRecording.h"
#include "StreamingTrack.h"

namespace csce240_programming_assignment_5 {
 StreamingTrack::StreamingTrack(const string& title,
                                const string& artist,
                                int length,
                                int numArtists,
                                const string& genre,
                                int numStreams)
                : SongRecording(title, artist, length, numArtists) {
    numStreams_ = (numStreams >= 0) ? numStreams : 0;
    numGenres_ = 1;
    genres_ = new string[numGenres_];
    genres_[0] = genre;
  }
   //copy constructor
  StreamingTrack::StreamingTrack(const StreamingTrack& tocopy)
                 : SongRecording(tocopy) {
    numStreams_ = tocopy.numStreams_;
    numGenres_ = tocopy.numGenres_;
    genres_ = new string[numGenres_];
    for (int i = 0; i < numGenres_; i++)
      genres_[i] = tocopy.genres_[i];
  }
  StreamingTrack::StreamingTrack(const SongRecording& song,
                                 const string& genre,
                                 int streams)
                 : SongRecording(song) {
    numStreams_ = (streams >= 0) ? streams : 0;
    numGenres_ = 1;
    genres_ = new string[numGenres_];
    genres_[0] = genre;
  }
  StreamingTrack& StreamingTrack::operator = (const StreamingTrack& tocopy){
    if (this != &tocopy) {
      SongRecording::operator=(tocopy);
      numStreams_ = tocopy.numStreams_;
      delete[] genres_;
      numGenres_ = tocopy.numGenres_;
      if (numGenres_ > 0) {
        genres_ = new string[numGenres_];
        for (int i = 0; i < numGenres_; i++)
          genres_[i] = tocopy.genres_[i];
      } else {
        genres_ = nullptr;
      }
    }
    return *this;
  }
  StreamingTrack::~StreamingTrack(){
    delete[] genres_;
  }

  //streams getter/setter/add
  int StreamingTrack::GetStreams() const{
    return numStreams_;
  }
  void StreamingTrack::SetStreams(const int streams){
    if ( streams >= 0 ) {
      numStreams_ = streams;
    } else {
      return;
    }
  }
  void StreamingTrack::AddStreams(int newStreams){
    if ( newStreams >= 0 ) {
      numStreams_ = numStreams_ + newStreams;
    } else {
      return;
    }
  }

  //genres getters/checkers/manipulators
  int StreamingTrack::GetNumGenres() const{
    return numGenres_;
  }
  string StreamingTrack::GetGenre(int i) const{
    if ( i < 1 || i > numGenres_ ) {
      return "not valid index";
    } else {
      return genres_[i - 1];
    }
  }
  bool StreamingTrack::IsGenre(const string& trackGenre) const {
   for (int i = 0; i < numGenres_; i++) {
     if (genres_[i] == trackGenre) {
       return true;
     }
   }
   return false;
  }
  void StreamingTrack::AddGenre(const string& newGenre) {
    if ( IsGenre(newGenre) ) {
      return;
    } else {
      string* temp = new string[numGenres_ + 1];
      for ( int i = 0; i < numGenres_; i++ ) {
        temp[i] = genres_[i];
      }
      temp[numGenres_] = newGenre;
      delete[] genres_;
      genres_ = temp;
      numGenres_++;
    }
  }
  void StreamingTrack::RemoveGenre(const string& currGenre){
    if (!IsGenre(currGenre)) return;
    if (numGenres_ == 1) {
      delete[] genres_;
      genres_ = nullptr;
      numGenres_ = 0;
      return;
    }
    string* temp = new string[numGenres_ - 1];
    int index = 0;
    for (int i = 0; i < numGenres_; i++) {
      if (genres_[i] != currGenre) {
        temp[index++] = genres_[i];
      }
    }
    delete[] genres_;
    genres_ = temp;
    numGenres_--;
  }
} // namespace csce240_programming_assignment_5