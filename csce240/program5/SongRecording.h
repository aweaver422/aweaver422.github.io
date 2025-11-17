// COPYRIGHT 2025 aweaver

#ifndef SONG_RECORDING_H
#define SONG_RECORDING_H

#include <string>
using std::string;

namespace csce240_programming_assignment_5 {

class SongRecording {
  public:
    //constructor
    explicit SongRecording(const string& title = "untitled",
                  const string& artist = "unknown",
                  int length = 0,
                  int numArtists = 1);
    SongRecording(const SongRecording& tocopy);
    SongRecording& operator = (const SongRecording& tocopy);
    ~SongRecording();

    //title getter/setter
    string GetTitle() const;
    void SetTitle(const string& title);

    //numArtists getter/setter
    int GetNumArtists() const;
    void SetNumArtists(int num);

    //artist getter/setter
    string GetArtist(int i = 1) const;
    void SetArtist(const string& name, int i = 1);

    //trackLength getter/setter
    int GetTrackLength() const;
    void SetTrackLength(int length);

  private:
    string title_;
    string* artist_;
    int numArtists_;
    int length_;
};

} // namespace csce240_programming_assignment_5

#endif