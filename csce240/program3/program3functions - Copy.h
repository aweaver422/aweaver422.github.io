// Copyright 2025 aweaver
#include "p3compares.h"
#ifndef PROGRAM3FUNCTIONS_H_
#define PROGRAM3FUNCTIONS_H_

void RemoveValues(int array[], int size, int value);

void ShiftArray(int array[], int size, int num_positions);

bool IsAnagram(const char array_a[], const char array_b[], bool case_sens = false);

bool Replace1With2(char array[], const int size, char find, char replace_a, char replace_b);

void SwapRowsAndColumns(int table[kSquareSize][kSquareSize]);

#endif