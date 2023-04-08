import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import java from '../img/java.jpg';
import diseno from '../img/html.PNG';
import mysql from '../img/mysql1.jpg';
import javaUni from '../img/java-universidad.png';
import pl from '../img/plsql.png';
import spring from '../img/Spring-BOOT.jpg';
import react from '../img/react.jpg';
import python from '../img/python.jpg';
import mensaje from '../img/whap.png';

import './tarjetaStilo/tarjeta.css';

function Tarjeta(){
    return (
      <div>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={java} />
        <Card.Body>
          <Card.Title>Java 11 </Card.Title>
          <Card.Text>
                Domina una de las tecnologías más utilizadas en el mercado. 
                Aprende Programación Orientada a Objetos con integración de Bases de Datos y utilizaremos lambdas, metodos Strings, 
                Optional isEmpty, programacion funcional para construir aplicaciones eficientes y robustas.

                <br></br>
                <br></br>
                <Card.Title>Para mas información contactenos. </Card.Title>
          </Card.Text>
        </Card.Body>
        
        
      </Card>
      <Card>
        <Card.Img variant="top" src={diseno} />
        <Card.Body>
          <Card.Title>Diseño Web</Card.Title>
          <Card.Text>
                Aprende de forma simple los códigos necesarios para diseñar cualquier página web desde cero.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               
                <Card.Title>Para mas información contactenos. </Card.Title>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={mysql} />
        <Card.Body>
          <Card.Title>MYSQL</Card.Title>
          <Card.Text>
                Aprenderas uno de los motores de base de datos mas importante del mercado laboral.
                Crearemos un DER y a manipular datos DDL DML.
                <br></br>
                <br></br>
                <br></br>
                <Card.Title>Para mas información contactenos. </Card.Title>
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src={javaUni} />
        <Card.Body>
          <Card.Title>Universidad Java </Card.Title>
          <Card.Text>
                Domina uno de los lenguajes de programación mas demandado del mercado laboral.
                Aprenderemos de java basico hasta volvernos un experto en Java hasta desarrollar aplicaciones, utilizando buenas 
                practicas de programación.

                <br></br>
                <br></br>
                <Card.Title>Para mas información contactenos. </Card.Title>
          </Card.Text>
        </Card.Body>
        
        
      </Card>
      <Card>
        <Card.Img variant="top" src={pl} />
        <Card.Body>
          <Card.Title>PL/SQL</Card.Title>
          <Card.Text>
                Aprende a gestionar el motor de bases de datos más robusto del mercado. 
                Domina la manipulación de datos y aprende a crear funciones, procedimientos almacenados.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
               
               
                <Card.Title>Para mas información contactenos. </Card.Title>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={spring} />
        <Card.Body>
          <Card.Title>Spring boot</Card.Title>
          <Card.Text>
                Domina uno de los Frameworks más demandados del mercado.
                Spring boot es una herramienta que nos permite utilizar el farmework spring 
                de una forma mas amigable para el desarrollo de desoftware.
                <br></br>
                <br></br>
                <br></br>
                <Card.Title>Para mas información contactenos. </Card.Title>
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>







    <CardGroup>
      <Card>
        <Card.Img variant="top" src={react} />
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text>
                Domina uno de los Frameworks más demandados para el desarrollo en el frontend.
                Desarrollando aplicaciones web con SPA, la utilizacion Hooks y distintas librerias para complementar la aplicación web.

                <br></br>
                <br></br>
                <Card.Title>Para mas información contactenos. </Card.Title>
          </Card.Text>
        </Card.Body>
        
        
      </Card>
      <Card>
        <Card.Img variant="top" src={python} />
        <Card.Body>
          <Card.Title>PYTHON</Card.Title>
          <Card.Text>
                Domina uno de los lenguaje de programación mas demandado por las empresas.
                Aprenderas los principios de la programación desarrollando aplicaciones, con las mejores practicas de programación.
                <br></br>
                <br></br>
              
               
               
                <Card.Title>Para mas información contactenos. </Card.Title>
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src={spring} />
        <Card.Body>
          <Card.Title>Spring boot</Card.Title>
          <Card.Text>
                Domina uno de los Frameworks más demandados del mercado.
                Spring boot es una herramienta que nos permite utilizar el farmework spring 
                de una forma mas amigable para el desarrollo de desoftware.
                <br></br>
                <br></br>
                
                <Card.Title>Para mas información contactenos. </Card.Title>
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    <div class="container-boton ">
        <a href="https://wa.me/5493512101216?text=Hola!!%20solicito%20mas%20información%20de%20los%20cursos%20" target="_blank">
            <img  src={mensaje} alt="" class="boton" />              
        </a>
      </div>

      <div class="empieza ">
        <h4>COMIENZA EN ABRIL</h4>
      </div>
    </div>
      );
}

export default Tarjeta;