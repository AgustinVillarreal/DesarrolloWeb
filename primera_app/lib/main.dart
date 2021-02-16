import 'package:flutter/material.dart';

void main() => runApp(MiApp());

class MiApp extends StatelessWidget {
  const MiApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Mi App",
      home: Inicio(),
    );
  }
}

class Inicio extends StatefulWidget {
  Inicio({Key key}) : super(key: key);

  @override
  _InicioState createState() => _InicioState();
}

class _InicioState extends State<Inicio> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Hola"),
      ),
      body: cuerpo(),
    );
  }
}

Widget cuerpo() {
  return Container(
    decoration: BoxDecoration(
        image: DecorationImage(
            image: NetworkImage("https://fondosmil.com/fondo/13686.jpg"),
            fit: BoxFit.cover)),
    child: Center(
        child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        nombre(),
        campoUsuario(),
        campoContrasenia(),
        SizedBox(
          height: 15,
        ),
        botonDeInicio(),
      ],
    )),
  );
}

Widget nombre() {
  return Text(
    "Sing in",
    style: TextStyle(
        color: Colors.cyan, fontSize: 35.0, fontWeight: FontWeight.bold),
  );
}

Widget campoUsuario() {
  return Container(
    padding: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
    child: TextField(
      decoration: InputDecoration(
          hintText: "Inserte nombre de usuario",
          fillColor: Colors.white,
          filled: true),
    ),
  );
}

Widget campoContrasenia() {
  return Container(
    padding: EdgeInsets.symmetric(horizontal: 10.0, vertical: 5.0),
    child: TextField(
      obscureText: true,
      decoration: InputDecoration(
          hintText: "Inserte contraseña",
          fillColor: Colors.white,
          filled: true),
    ),
  );
}

Widget botonDeInicio() {
  return FlatButton(
    color: Colors.cyan,
    padding: EdgeInsets.symmetric(horizontal: 30.0, vertical: 10.0),
    onPressed: () {},
    child: Text(
      "Ingresar",
      style: TextStyle(fontSize: 15.0, color: Colors.white),
    ),
  );
}
