// Copyright 2025 aweaver
#include"program3functions.h"
#include"p3compares.h"
#include<iostream>
#include<iomanip>
using std::cout;
using std::cin;
using std::endl;

void RemoveValues(int array[], int size, int value){
  // holds value for next availible open spot when searching for value
  int temp = 0;
  // gets rid of the value present in array by moving existing nums up one
  for ( int i = 0; i < size; i++ ) {
    if ( array[i] != value ) {
      array[temp] = array[i];
      temp++;
    }
  }
  // adds -999 to end depending on size, however many of value were removed
  while (temp < size) {
    array[temp] = -999;
    temp++;
  }
}

void ShiftArray(int array[], const int size, int num_positions){
  if (size <= 0)
    return;
  num_positions %= size;
  // no shift
  if (num_positions == 0)
    return;
  if (num_positions < 0)
    num_positions += size;

  int temp[size];

  // copies array into temp array
  for(int i = 0; i < num_positions; i++)
    temp[i] = array[i];

  // moves elements forward
  for(int i = num_positions; i < size; i++)
    array[i - num_positions] = array[i];

  // puts temp array into original array
  for (int i = 0; i < num_positions; i++)
    array[size - num_positions + i] = temp[i];
  /*
  //prints array;
  for (int i = 0; i < size; i++)
    cout << array[i] << " ";
  */
}


bool IsAnagram(const char array_a[], const char array_b[], bool case_sens){
  int aSize = 0, bSize = 0;
  char tempA[100], tempB[100];

 //check for non-alphabetic chars
  for (int i = 0; array_a[i] != '\0'; i++) {
    if ((array_a[i] >= 'A' && array_a[i] <= 'Z') ||
        (array_a[i] >= 'a' && array_a[i] <= 'z'))
      tempA[aSize++] = array_a[i];
  }
  for (int i = 0; array_b[i] != '\0'; i++) {
    if ((array_b[i] >= 'A' && array_b[i] <= 'Z') ||
        (array_b[i] >= 'a' && array_b[i] <='z'))
      tempB[bSize++] = array_b[i];
  }

  // final element in array
  tempA[aSize] = '\0';
  tempB[bSize] = '\0';

  // compare sizes
  if (aSize != bSize)
    return false;

  // check for case sensitive
  if (case_sens != true) {
    for (int i = 0; i < aSize; i++) {
      if (tempA[i] >= 'A' && tempA[i] <= 'Z')
        tempA[i] = tempA[i] + 32;
      if (tempB[i] >= 'A' && tempB[i] <= 'Z')
        tempB[i] = tempB[i] + 32;
    }
  }

  // sort c string arrays
  for(int i = 0; i < aSize - 1; i++) {
    for(int j = 0; j < aSize - i - 1; j++) {
      if (tempA[j] > tempA[j + 1]) {
        char temp = tempA[j];
        tempA[j] = tempA[j + 1];
        tempA[j + 1] = temp;
      }
      if (tempB[j] > tempB[j + 1]) {
        char temp = tempB[j];
        tempB[j] = tempB[j + 1];
        tempB[j + 1] = temp;
      }
    }
  }

  // check to see if it's an anagram
  for (int i = 0; i < aSize; i++) {
    if (tempA[i] != tempB[i])
      return false;
  }
  return true;
}

bool Replace1With2(char array[], int size, char find, char replace_a, char replace_b){
  // check length
  int numOccur = 0;
  int numChar = 0;
  for (int i = 0; i < size; i++) {
    if (array[i] == '\0')
      break;
    if (array[i] == find)
      numOccur++;
    numChar++;
  }

  // check to see if space is available
  if (size <= numOccur + numChar){
    return false;
  }

  // replace, starting at the end to move everything back
  for (int i = numChar - 1; i >=0; i--) {
    if (array[i] == find) {
      for (int j = numChar; j > i; j--) {
        array[j + 1] = array[j];
      }
      array[i] = replace_a;
      array[i + 1] = replace_b;
      numChar++;
    }
  }

  return true;
}

void SwapRowsAndColumns(int table[kSquareSize][kSquareSize]){
  // rows
  for (int i = 0; i < kSquareSize; i++) {
    // columns
    for (int j = i + 1; j < kSquareSize; j++) {
      int temp = table[j][i];
      table[j][i] = table [i][j];
      table[i][j] = temp;
    }
  }
}