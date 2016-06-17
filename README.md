# Translator #

Translator Reads User input, and based on the Operation it modifies the data.
It makes a .JSON file with the Data arrays received by it.

Steps-

1. User Inputs the Name of College and type of data associated with it.
2. Then it Inputs the Data for the corresponding Type.
3. Conditionals:
   -> if user wants to Test a String.
     ->(yes) enter the test string.
     ->(no) End of this Entity, you can now enter a newer one.
4. The Data keeps on pushing into the Json Array.
5. Once the program is executed completely, it will make a Json file, with College as a folder Name and Data Type as the filename.
         
Functions -

1)Translator-
Its the Main Function , all the Conditional Statements will be Executed in here.
-> enter- from: , to: , Operation:
->Test the string?
      ->(yes)Happy with the Test?
               ->(yes)Want to Add More?
                      -(yes)push data, loop to Translator.
                      -(no) push data, END!
               ->(no)enter data again, loop to translator.
      ->(no)Want to Add More?
               -(yes)push data, loop to Translator.
               -(no) push data, END!

2)Testing-
This function Test's the String, Using the eval() function

 