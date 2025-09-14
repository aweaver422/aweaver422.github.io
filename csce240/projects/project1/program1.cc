// AINSLEY WEAVER
// i had trouble extracting my file from the VM so i ended up copying it over to vscode. hopefully it still works.

#include<iostream>
using std::cout;
using std::endl;
using std::cin;
#include<fstream>
using std::ifstream;

//using arrays to store each number (even though we havent talked about it, hoped my java knowledge would work with c++)
int mmArray[100], ssArray[100];
int total;

//checks if any input is incorrect, if it's not then the time is added to the array
void readTimes() {
int mm, ss;
  char colon;
  char firstChar = cin.peek();
  //runs until programs finds a non int or invalid num
  while ( true ) {
    //checks to see if q was entered, if entered it breaks out of loop and st ops counting
    if ( !( cin >> mm >> colon >> ss ) ) {
      break;
    }
    //checks to see if mm and ss are between 0 and 59
    else if ( ( mm > 59 || mm < 0 || ss > 59 || ss < 0 || colon != ':' ) ) {
      cout << "Input " << total + 1 << " did not match expected format." << endl;
      cout << "Fastest and total running times are based on the first ";
      break;
    }
    //checks to see if format is valid
    else if ( firstChar != '0' ) {
      if ( mm < 10 ) {
        cout << "Input " << total + 1 << " did not match expected format." << endl;
        cout << "Fastest and total running times are based on the first ";
        break;
      }
    }
    mmArray[total] = mm;
    ssArray[total] = ss;
    ++total;
  }
}

//prints out total of valid times
void timesRead() {
  if ( total == 1 ) {
    cout << total << " valid time read." << endl;
  }
  else {
    cout << total << " valid times read." << endl;
  }
}

//calculates fastest mile from valid times
void fastestMile() {
  int fastestMM = mmArray[0], fastestSS = ssArray[0];
  //use for loop to go through array and compare values
  for ( int i = 1; i < total; i++ ) {
    if ( mmArray[i] < fastestMM || ( mmArray[i] == fastestMM && ssArray[i] <     fastestSS ) ) {
      fastestMM = mmArray[i];
      fastestSS = ssArray[i];
    }
  }
  cout << "Fastest mile time: ";
  //if num is single digit, add 0 in front
  if ( fastestMM < 10 ) {
    cout << "0";
  }
  cout << fastestMM << ":";
  //if num is single digit, add 0 in front
  if ( fastestSS < 10 ) {
    cout << "0";
  }
  cout << fastestSS << endl;
}

//calculates total time from valid times
void totalTime() {
  int totalMM = 0, totalSS = 0, totalHH = 0;
  for ( int i = 0; i < total; i++) {
    totalMM += mmArray[i];
    totalSS += ssArray[i];
  }

  totalMM += totalSS / 60; //adds full minutes to totalMM
  totalSS = totalSS % 60; //puts remaining seconds in totalSS
  //checks if minutes exceeds an hour
  if ( totalMM >= 60 ) {
    totalHH += totalMM / 60; //adds full hours to totalHH
    totalMM = totalMM % 60; //puts remaining minutes in totalMM
    }
    //checks if time contains hours
    if ( totalHH > 0 ) {
      cout << "Total running time: " << totalHH << ":";
      //adds zero if single digit
      if ( totalMM < 10 ) {
        cout << "0";
      }
      cout << totalMM << ":";
      //adds zero if single digit
      if ( totalSS < 10 ) {
        cout << "0";
      }
      cout << totalSS << endl;
    }
    else {
      cout << "Total running time: ";
      //adds zero if single digit
      if ( totalMM < 10 ) {
        cout << "0";
      }
      cout << totalMM << ":";
      //adds zero if single digit
      if ( totalSS < 10 ) {
        cout << "0";
      }
      cout << totalSS << endl;
    }
  }

int main() {
  readTimes();
  timesRead();
  fastestMile();
  totalTime();
  return 0;
}