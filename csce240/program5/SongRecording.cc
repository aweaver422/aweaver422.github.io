// COPYRIGHT 2025 aweaver

#include "SongRecording.h"
#include <string>
using std::string;

namespace csce240_programming_assignment_5 {

  //constructor
  SongRecording::SongRecording(const string& title,
                               const string& artist,
                               int length,
                               int numArtists) {
    title_ = title;
    numArtists_ = (numArtists > 0) ? numArtists : 1;
    artist_ = new string[numArtists_];
    for (int i = 0; i < numArtists_; i++) {
      if (artist.empty()) {
        artist_[i] = "unknown";
      } else {
        artist_[i] = artist;
      }
    }
    length_ = (length >= 0) ? length : 0;
  };
  //copy constructor
  SongRecording::SongRecording(const SongRecording& tocopy) :
                                                 title_(tocopy.title_),
                                                 numArtists_(tocopy.numArtists_),
                                                 length_(tocopy.length_) {
    artist_ = new string[numArtists_];
    for (int i = 0; i < numArtists_; i++)
      artist_[i] = tocopy.artist_[i];
  }

  SongRecording& SongRecording::operator = (const SongRecording& copy){
    if (this != &copy) {
      delete[] artist_;
      title_=  copy.title_;
      numArtists_ = copy.numArtists_;
      length_ = copy.length_;

      artist_ = new string[numArtists_];
      for (int i = 0; i < numArtists_; i++)
        artist_[i] = copy.artist_[i];
    }
    return *this;
  }

  //destructor
  SongRecording::~SongRecording() {
    delete[] artist_;
  }

  //title getter/setter
  string SongRecording::GetTitle() const {
    return title_;
  }
  void SongRecording::SetTitle(const string& title){
    if (!title.empty()) {
      title_ = title;
    }
  }

  //numArtists getter/setter
  int SongRecording::GetNumArtists() const {
    return numArtists_;
  }
  void SongRecording::SetNumArtists(int num){
    if ( num > 0 ) {
      string* newList = new string[num];
      for (int i = 0; i < num && i < numArtists_; i++)
        newList[i] = artist_[i];
      delete[] artist_;
      artist_ = newList;
      numArtists_ = num;
    } else {
      return;
    }
  }

  //artist getter/setter
  string SongRecording::GetArtist(int i) const {
    if (i < 1 || i > numArtists_)
      return "out of bounds";
    return artist_[i - 1];
  }
  void SongRecording::SetArtist(const string& name, int i){
    if ( i > 0 && i <= numArtists_ && !name.empty() ) {
      artist_[i - 1] = name;
    } else {
      return;
    }
  }

  //trackLength getter/setter
  int SongRecording::GetTrackLength() const {
    return length_;
  }
  void SongRecording::SetTrackLength(int length){
    if ( length < 1 )
      return;
    else
      length_ = length;
  }

} // namespace csce240_programming_assignment_5