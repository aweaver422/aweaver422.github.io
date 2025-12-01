// COPYRIGHT 2025 aweaver

#ifndef STREAMING_TRACK_H
#define STREAMING_TRACK_H

#include <string>
using std::string;
#include "SongRecording.h"

namespace csce240_programming_assignment_5 {

class StreamingTrack : public SongRecording {
  public:
    //takes title, primary artist, track length, # of artists, primary genre,
    //# of streams as
    explicit StreamingTrack(const string& title = "untitled",
                            const string& artist = "unknown",
                            int length = 0,
                            int numArtists = 1,
                            const string& genre = "pop",
                            int numStreams = 0);
    StreamingTrack(const StreamingTrack& tocopy);
    StreamingTrack(const SongRecording& song,
                   const string& genre = "pop",
                   int streams = 0);
    StreamingTrack& operator = (const StreamingTrack& tocopy);
    ~StreamingTrack();

    //streams getter/setter/add
    int GetStreams() const;
    void SetStreams(const int streams);
    void AddStreams(int newStreams);

    //genres getters/checkers/manipulators
    int GetNumGenres() const;
    string GetGenre(int i = 1) const;
    bool IsGenre(const string& trackGenre) const;
    void AddGenre(const string& newGenre);
    void RemoveGenre(const string& currGenre);

  private:
    int numStreams_;
    string* genres_;
    int numGenres_;
};

} // namespace csce240_programming_assignment_5

#endif