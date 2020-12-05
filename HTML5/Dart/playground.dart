import'dart:io';

void main(){
  print("Hello World");
  var firstName = "Chloe";
  String secondName = "Gan";

  print(firstName + " " + secondName);

  stdout.write("Name : ");
  String name = stdin.readLineSync();
  print("My name is $name");

  var one = int.parse('1');
  assert(one == 1);
  
  var doubleValue = double.parse("9.2");
  assert(doubleValue == 9.2);
  
  String  piAsString = 3.14159.toStringAsFixed(2);
  assert(piAsString == '3.14');
  print(piAsString);

  var n = Num();
  int number;
  int i ;

  number = n?.num?? 0;

  print(number);

  print(i ??= 100 );
  i = 520;
  print(i ??= 100 );

  int x = 100;
  var result = x % 2 == 0 ? "Even" : "Odd";
  print(result);

  int y = 100;
  if(y is int){
    print("$y is Integer");
  }else if (y is double){
    print("$y is Double");
  }
}

class Num{
  int num = 10;
}