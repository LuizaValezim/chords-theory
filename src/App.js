import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams, useHistory } from 'react-router-dom';
import {accessToken, accessChords} from "./Access.js";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import "./App.css";

function GetInfo(sufix){
    const [info, setInfo] = useState([]);

    useEffect(() => {
        accessToken().then((token) => {
                      accessChords(token, sufix)
                          .then((chr) => setInfo(chr))
        })}, []);

    console.log(info);

    return info;
}


var dictC = {
  first: ["C", "G", "Am", "F", "2,4%", "1,5,6,4"], // 2,4% das músicas do banco de dados possuem essa combinação
  second: ["C", "G", "F", "C", "1,5%", "1,5,4,1"], // 1,5% das músicas do banco de dados possuem essa combinação
  third: ["C", "F", "C", "F", "1,2%", "1,4,1,4"], // 1,2% das músicas do banco de dados possuem essa combinação
};
var dictD = {
  first: ["D", "A", "Bm", "G", "2,4%", "2,6,7,5"],
  second: ["D", "G", "A", "D", "1,2%", "2,5,6,2"],
  third: ["D", "Em", "Bm", "G", "0.27%", "2,3,7,5"],
};
var dictE = {
  first: ["Em", "F", "G", "Am", "0,74%", "3,4,5,6"],
  second: ["Em", "Am", "G", "F", "0,31%", "3,6,5,4"],
  third: ["E", "Am", "F", "C", "0.19%", "3,6,4,1"],
};
var dictF = {
  first: ["F", "C", "G", "Am", "2,3%", "4,1,5,6"],
  second: ["F", "G", "Am", "F", "1,5%", "4,5,6,4"],
  third: ["F", "Am", "G", "F", "0,84%", "4,6,5,4"],
};
var dictG = {
  first: ["G", "Am", "F", "C", "2,1%", "5,6,4,1"],
  second: ["G", "F", "C", "G", "1,5%", "5,4,1,5"],
  third: ["G", "C", "F", "G", "1,2%", "5,1,4,5"],
};
var dictA = {
  first: ["Am", "F", "C", "G", "2,2%", "6,4,1,5"],
  second: ["Am", "G", "F", "G", "1,4%", "6,5,4,5"],
  third: ["Am", "C", "G", "F", "0,45%", "6,1,5,4"],
};
var dictB = {
  first: ["B", "C", "B", "C", "0,012%", "7,1,7,1"],
  second: ["B", "E", "Am", "G", "0,006%", "7,3,6,5"],
  third: ["B", "Em", "C", "G", "0,006%", "7,3,1,5"],
};


function App() {
    var nums, sufix, sufixSong, songs, chords, finalProb;

    // Parte que será usada no deploy -- não funcionando

    // const params = useParams();
    // const [favs, setFavs] = useState([]);

    // const loadData = () => {
    //     axios
    //       .get(`https://frozen-badlands-04318.herokuapp.com/api/combinations/${params.combination_title}/`)
    //       .then((res) =>{
    //         let combinations = res.data;
    //         console.log(combinations)
    //         setFavs(res.data);
    //       });
    // };

    // useEffect(() => {
    //     loadData();
    //   }, []);

    sufixSong = "songs?cp=";

    // Fazendo a chamada para as músicas
    var songsC1 = GetInfo(sufixSong + dictC.first[5]);
    var songsC2 = GetInfo(sufixSong + dictC.second[5]);
    var songsC3 = GetInfo(sufixSong + dictC.third[5]);

    var songsD1 = GetInfo(sufixSong + dictD.first[5]);
    var songsD2 = GetInfo(sufixSong + dictD.second[5]);
    var songsD3 = GetInfo(sufixSong + dictD.third[5]);

    var songsE1 = GetInfo(sufixSong + dictE.first[5]);
    var songsE2 = GetInfo(sufixSong + dictE.second[5]);
    var songsE3 = GetInfo(sufixSong + dictE.third[5]);

    var songsF1 = GetInfo(sufixSong + dictF.first[5]);
    var songsF2 = GetInfo(sufixSong + dictF.second[5]);
    var songsF3 = GetInfo(sufixSong + dictF.third[5]);

    var songsG1 = GetInfo(sufixSong + dictG.first[5]);
    var songsG2 = GetInfo(sufixSong + dictG.second[5]);
    var songsG3 = GetInfo(sufixSong + dictG.third[5]);

    var songsA1 = GetInfo(sufixSong + dictA.first[5]);
    var songsA2 = GetInfo(sufixSong + dictA.second[5]);
    var songsA3 = GetInfo(sufixSong + dictA.third[5]);

    var songsB1 = GetInfo(sufixSong + dictB.first[5]);
    var songsB2 = GetInfo(sufixSong + dictB.second[5]);
    var songsB3 = GetInfo(sufixSong + dictB.third[5]);


    // sufixSong = sufixSong + dictC.first[5];
    // songs = GetInfo(sufixSong);
    // console.log(songs[0]?.artist);
    // console.log(songsC1[0]?.song);
    
    
    // sufix = "nodes?cp="; // The following request shows the chords that are most likely to come after the fist chosen chord
    // nums = "1";
    // sufix = sufix + nums;
    // chords = GetInfo(sufix);
    // finalProb = chords[0]?.probability;
    // console.log(finalProb);
    // console.log(chords);


    // Definindo os botões
    const ChordsButton = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#6096BA"),
      backgroundColor: "#274C77",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#6096BA",
      },
    }));

    const ChordsButtonSelected = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#F24150"),
      backgroundColor: "#F24150",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#FF8C96",
      },
    }));

    const MainButton = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#F24150"),
      backgroundColor: "#F24150",
      borderRadius: 10,
      padding: 15,
      margin: 12,
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#FF8C96",
      },
    }));

    const StartButton = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#F24150"),
      backgroundColor: "#F24150",
      borderRadius: 10,
      padding: 15,
      margin: 12,
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#FF8C96",
      },
    }));

    const FavoriteButton = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#FFFFFF"),
      backgroundColor: "#FFFFFF",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#f24150",
      },
    }));

    const UnfavoriteButton = styled(Button) (({ theme }) => ({
      color: theme.palette.getContrastText("#f24150"),
      backgroundColor: "#f24150",
      borderRadius: 50,
      padding: 20,
      margin: 5,
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        'Rubik',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontweight: "bold",
      '&:hover': {
        backgroundColor: "#FFFFFF",
      },
    }));


    return (
      <div className="main">

          <div className="title">
              <h1> Chords </h1>
              <h1> Theory </h1>
          </div>

          <BrowserRouter>

            <Route path="/" exact>
              <div className="content">
                <h2> Bem-vindo/a ao Chords Theory! </h2>
                <p> Está querendo compor uma música, mas não sabe por onde começar? 
                    Não se preocupe, vou te ajudar a escolher a melhor combinação de acordes usando teoria musical.</p>
                <Link to="/Main" style={{ textDecoration: 'none' }}> <StartButton variant="contained">Começar</StartButton> </Link>
              </div>
            </Route>

            
            {/* Main Route */}
            <Route path="/Main">
              <div className="content">

                  <div className="chords"> 

                    <h3> Escolha um acorde para começar:</h3>

                    <div className="chordsButton1">
                        <Link to="/ChordC" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained">C</ChordsButton> </Link>
                        <Link to="/ChordD" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">D</ChordsButton> </Link>
                        <Link to="/ChordE" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">E</ChordsButton> </Link>
                        <Link to="/ChordF" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">F</ChordsButton> </Link>
                    </div>
                    <div className="chordsButton2">
                        <Link to="/ChordG" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">G</ChordsButton> </Link>
                        <Link to="/ChordA" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">A</ChordsButton> </Link>
                        <Link to="/ChordB" style={{ textDecoration: 'none' }}> <ChordsButton variant="contained" href="#text-buttons">B</ChordsButton> </Link>
                    </div>
                  </div> 
              </div>
              <Link to="/Favorites" style={{ textDecoration: 'none' }}>
              <FavoriteButton variant="contained" fontSize="small">❤</FavoriteButton> 
              </Link>

            </Route>   

           <Route path="/Favorites">
           <div className="content">

            <div className="chords"> 

              <h2>Aqui está as suas combinações favoritas!</h2>

              <div className="chordsButton3">
                  <div className="groupByProbability">
                  {/* {
                    favs.map(
                      (combination) => (
                        <div>
                          <ChordsButton key={`combinações__${combination.id}`} src={combination.chords} id={combination.id} combination_title={params.combination_title}></ChordsButton> 
                        </div>
                      ))
                  } */}
                    <ChordsButton variant="contained">{dictC.second[0]}</ChordsButton> 
                    <ChordsButton variant="contained">{dictC.second[1]}</ChordsButton>
                    <ChordsButton variant="contained">{dictC.second[2]}</ChordsButton>
                    <ChordsButton variant="contained">{dictC.second[3]}</ChordsButton>
                    <UnfavoriteButton onClick={() => { alert('Desfavoritado') }} variant="contained" fontSize="small">❤</UnfavoriteButton> 
                  </div>
              </div>
            </div> 
            <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>
            </div>
           </Route> 


            {/* Chord C */}
            <Route path="/ChordC">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">C</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictC.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-C-G-Am-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictC.first[0]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.first[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 
                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictC.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-C-G-F-C" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictC.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictC.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.second[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictC.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-C-F-C-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictC.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictC.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictC.third[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div>
              </div>
              
            </Route>

            <Route path="/songs-with-C-G-Am-F"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação C-G-Am-F </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsC1[0]?.artist} - {songsC1[0]?.song} ({songsC1[0]?.section})</h3>
                  <h3> >> {songsC1[1]?.artist} - {songsC1[1]?.song} ({songsC1[1]?.section})</h3>
                  <h3> >> {songsC1[2]?.artist} - {songsC1[2]?.song} ({songsC1[2]?.section})</h3>
                  <h3> >> {songsC1[3]?.artist} - {songsC1[3]?.song} ({songsC1[3]?.section})</h3>
                  <h3> >> {songsC1[4]?.artist} - {songsC1[4]?.song} ({songsC1[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>
            </Route>
            <Route path="/songs-with-C-G-F-C"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação C-G-F-C </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsC2[0]?.artist} - {songsC2[0]?.song} ({songsC1[0]?.section})</h3>
                  <h3> >> {songsC2[1]?.artist} - {songsC2[1]?.song} ({songsC2[1]?.section})</h3>
                  <h3> >> {songsC2[2]?.artist} - {songsC2[2]?.song} ({songsC2[2]?.section})</h3>
                  <h3> >> {songsC2[3]?.artist} - {songsC2[3]?.song} ({songsC2[3]?.section})</h3>
                  <h3> >> {songsC2[4]?.artist} - {songsC2[4]?.song} ({songsC2[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>
            </Route>
            <Route path="/songs-with-C-F-C-F"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação C-F-C-F </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsC3[0]?.artist} - {songsC3[0]?.song} ({songsC3[0]?.section})</h3>
                  <h3> >> {songsC3[1]?.artist} - {songsC3[1]?.song} ({songsC3[1]?.section})</h3>
                  <h3> >> {songsC3[2]?.artist} - {songsC3[2]?.song} ({songsC3[2]?.section})</h3>
                  <h3> >> {songsC3[3]?.artist} - {songsC3[3]?.song} ({songsC3[3]?.section})</h3>
                  <h3> >> {songsC3[4]?.artist} - {songsC3[4]?.song} ({songsC3[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>
            </Route>


            {/* Chord D */}
            <Route path="/ChordD">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">D</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictD.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-D-A-Bm-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictD.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictD.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.first[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictD.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-D-G-A-D" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictD.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictD.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.second[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictD.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-D-Em-Bm-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictD.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictD.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictD.third[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            <Route path="/songs-with-D-A-Bm-G"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação D-A-Bm-G </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsD1[0]?.artist} - {songsD1[0]?.song} ({songsD1[0]?.section})</h3>
                  <h3> >> {songsD1[1]?.artist} - {songsD1[1]?.song} ({songsD1[1]?.section})</h3>
                  <h3> >> {songsD1[2]?.artist} - {songsD1[2]?.song} ({songsD1[2]?.section})</h3>
                  <h3> >> {songsD1[3]?.artist} - {songsD1[3]?.song} ({songsD1[3]?.section})</h3>
                  <h3> >> {songsD1[4]?.artist} - {songsD1[4]?.song} ({songsD1[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-D-G-A-D"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação D-G-A-D </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsD2[0]?.artist} - {songsD2[0]?.song} ({songsD2[0]?.section})</h3>
                  <h3> >> {songsD2[1]?.artist} - {songsD2[1]?.song} ({songsD2[1]?.section})</h3>
                  <h3> >> {songsD2[2]?.artist} - {songsD2[2]?.song} ({songsD2[2]?.section})</h3>
                  <h3> >> {songsD2[3]?.artist} - {songsD2[3]?.song} ({songsD2[3]?.section})</h3>
                  <h3> >> {songsD2[4]?.artist} - {songsD2[4]?.song} ({songsD2[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-D-Em-Bm-G"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação D-Em-Bm-G </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsD3[0]?.artist} - {songsD3[0]?.song} ({songsD3[0]?.section})</h3>
                  <h3> >> {songsD3[1]?.artist} - {songsD3[1]?.song} ({songsD3[1]?.section})</h3>
                  <h3> >> {songsD3[2]?.artist} - {songsD3[2]?.song} ({songsD3[2]?.section})</h3>
                  <h3> >> {songsD3[3]?.artist} - {songsD3[3]?.song} ({songsD3[3]?.section})</h3>
                  <h3> >> {songsD3[4]?.artist} - {songsD3[4]?.song} ({songsD3[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>


            {/* Chord E */}
            <Route path="/ChordE">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">E</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictE.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Em-F-G-Am" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictE.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictE.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.first[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictE.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Em-Am-G-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictE.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictE.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.second[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictE.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-E-Am-F-C" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictE.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictE.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictE.third[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            <Route path="/songs-with-Em-F-G-Am"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação Em-F-G-Am </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsE1[0]?.artist} - {songsE1[0]?.song} ({songsE1[0]?.section})</h3>
                  <h3> >> {songsE1[1]?.artist} - {songsE1[1]?.song} ({songsE1[1]?.section})</h3>
                  <h3> >> {songsE1[2]?.artist} - {songsE1[2]?.song} ({songsE1[2]?.section})</h3>
                  <h3> >> {songsE1[3]?.artist} - {songsE1[3]?.song} ({songsE1[3]?.section})</h3>
                  <h3> >> {songsE1[4]?.artist} - {songsE1[4]?.song} ({songsE1[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>
              
            </Route>
            <Route path="/songs-with-Em-Am-G-F"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação Em-Am-G-F </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsE2[0]?.artist} - {songsE2[0]?.song} ({songsE2[0]?.section})</h3>
                  <h3> >> {songsE2[1]?.artist} - {songsE2[1]?.song} ({songsE2[1]?.section})</h3>
                  <h3> >> {songsE2[2]?.artist} - {songsE2[2]?.song} ({songsE2[2]?.section})</h3>
                  <h3> >> {songsE2[3]?.artist} - {songsE2[3]?.song} ({songsE2[3]?.section})</h3>
                  <h3> >> {songsE2[4]?.artist} - {songsE2[4]?.song} ({songsE2[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-E-Am-F-C"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação E-Am-F-C </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsE3[0]?.artist} - {songsE3[0]?.song} ({songsE3[0]?.section})</h3>
                  <h3> >> {songsE3[1]?.artist} - {songsE3[1]?.song} ({songsE3[1]?.section})</h3>
                  <h3> >> {songsE3[2]?.artist} - {songsE3[2]?.song} ({songsE3[2]?.section})</h3>
                  <h3> >> {songsE3[3]?.artist} - {songsE3[3]?.song} ({songsE3[3]?.section})</h3>
                  <h3> >> {songsE3[4]?.artist} - {songsE3[4]?.song} ({songsE3[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>


            {/* Chord F */}
            <Route path="/ChordF">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">F</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictF.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-F-C-G-Am" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictF.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictF.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.first[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictF.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-F-G-Am-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictF.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictF.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.second[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictF.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-F-Am-G-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictF.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictF.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictF.third[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            <Route path="/songs-with-F-C-G-Am"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação F-C-G-Am </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsF1[0]?.artist} - {songsF1[0]?.song} ({songsF1[0]?.section})</h3>
                  <h3> >> {songsF1[1]?.artist} - {songsF1[1]?.song} ({songsF1[1]?.section})</h3>
                  <h3> >> {songsF1[2]?.artist} - {songsF1[2]?.song} ({songsF1[2]?.section})</h3>
                  <h3> >> {songsF1[3]?.artist} - {songsF1[3]?.song} ({songsF1[3]?.section})</h3>
                  <h3> >> {songsF1[4]?.artist} - {songsF1[4]?.song} ({songsF1[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-F-G-Am-F"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação F-G-Am-F </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsF2[0]?.artist} - {songsF2[0]?.song} ({songsF2[0]?.section})</h3>
                  <h3> >> {songsF2[1]?.artist} - {songsF2[1]?.song} ({songsF2[1]?.section})</h3>
                  <h3> >> {songsF2[2]?.artist} - {songsF2[2]?.song} ({songsF2[2]?.section})</h3>
                  <h3> >> {songsF2[3]?.artist} - {songsF2[3]?.song} ({songsF2[3]?.section})</h3>
                  <h3> >> {songsF2[4]?.artist} - {songsF2[4]?.song} ({songsF2[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-F-Am-G-F"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação F-Am-G-F </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsF3[0]?.artist} - {songsF3[0]?.song} ({songsF3[0]?.section})</h3>
                  <h3> >> {songsF3[1]?.artist} - {songsF3[1]?.song} ({songsF3[1]?.section})</h3>
                  <h3> >> {songsF3[2]?.artist} - {songsF3[2]?.song} ({songsF3[2]?.section})</h3>
                  <h3> >> {songsF3[3]?.artist} - {songsF3[3]?.song} ({songsF3[3]?.section})</h3>
                  <h3> >> {songsF3[4]?.artist} - {songsF3[4]?.song} ({songsF3[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>
              
            </Route>


             {/* Chord G */}
             <Route path="/ChordG">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">G</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictG.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-G-Am-F-C" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictG.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictG.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.first[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictG.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-G-F-C-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictG.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictG.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.second[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictG.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-G-C-F-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictG.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictG.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictG.third[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            <Route path="/songs-with-G-Am-F-C"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação G-Am-F-C </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsG1[0]?.artist} - {songsG1[0]?.song} ({songsG1[0]?.section})</h3>
                  <h3> >> {songsG1[1]?.artist} - {songsG1[1]?.song} ({songsG1[1]?.section})</h3>
                  <h3> >> {songsG1[2]?.artist} - {songsG1[2]?.song} ({songsG1[2]?.section})</h3>
                  <h3> >> {songsG1[3]?.artist} - {songsG1[3]?.song} ({songsG1[3]?.section})</h3>
                  <h3> >> {songsG1[4]?.artist} - {songsG1[4]?.song} ({songsG1[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-G-F-C-G"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação G-F-C-G </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsG2[0]?.artist} - {songsG2[0]?.song} ({songsG2[0]?.section})</h3>
                  <h3> >> {songsG2[1]?.artist} - {songsG2[1]?.song} ({songsG2[1]?.section})</h3>
                  <h3> >> {songsG2[2]?.artist} - {songsG2[2]?.song} ({songsG2[2]?.section})</h3>
                  <h3> >> {songsG2[3]?.artist} - {songsG2[3]?.song} ({songsG2[3]?.section})</h3>
                  <h3> >> {songsG2[4]?.artist} - {songsG2[4]?.song} ({songsG2[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-G-C-F-G"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação G-C-F-G </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsG3[0]?.artist} - {songsG3[0]?.song} ({songsG3[0]?.section})</h3>
                  <h3> >> {songsG3[1]?.artist} - {songsG3[1]?.song} ({songsG3[1]?.section})</h3>
                  <h3> >> {songsG3[2]?.artist} - {songsG3[2]?.song} ({songsG3[2]?.section})</h3>
                  <h3> >> {songsG3[3]?.artist} - {songsG3[3]?.song} ({songsG3[3]?.section})</h3>
                  <h3> >> {songsG3[4]?.artist} - {songsG3[4]?.song} ({songsG3[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>


            {/* Chord A */}
            <Route path="/ChordA">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">A</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictA.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Am-F-C-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictA.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictA.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.first[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictA.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Am-G-F-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictA.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictA.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.second[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictA.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-Am-C-G-F" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictA.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictA.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictA.third[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            <Route path="/songs-with-Am-F-C-G"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação Am-F-C-G </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsA1[0]?.artist} - {songsA1[0]?.song} ({songsA1[0]?.section})</h3>
                  <h3> >> {songsA1[1]?.artist} - {songsA1[1]?.song} ({songsA1[1]?.section})</h3>
                  <h3> >> {songsA1[2]?.artist} - {songsA1[2]?.song} ({songsA1[2]?.section})</h3>
                  <h3> >> {songsA1[3]?.artist} - {songsA1[3]?.song} ({songsA1[3]?.section})</h3>
                  <h3> >> {songsA1[4]?.artist} - {songsA1[4]?.song} ({songsA1[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-Am-G-F-G"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação Am-G-F-G </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsA2[0]?.artist} - {songsA2[0]?.song} ({songsA2[0]?.section})</h3>
                  <h3> >> {songsA2[1]?.artist} - {songsA2[1]?.song} ({songsA2[1]?.section})</h3>
                  <h3> >> {songsA2[2]?.artist} - {songsA2[2]?.song} ({songsA2[2]?.section})</h3>
                  <h3> >> {songsA2[3]?.artist} - {songsA2[3]?.song} ({songsA2[3]?.section})</h3>
                  <h3> >> {songsA2[4]?.artist} - {songsA2[4]?.song} ({songsA2[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-Am-C-G-F"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação Am-C-G-F </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsA3[0]?.artist} - {songsA3[0]?.song} ({songsA3[0]?.section})</h3>
                  <h3> >> {songsA3[1]?.artist} - {songsA3[1]?.song} ({songsA3[1]?.section})</h3>
                  <h3> >> {songsA3[2]?.artist} - {songsA3[2]?.song} ({songsA3[2]?.section})</h3>
                  <h3> >> {songsA3[3]?.artist} - {songsA3[3]?.song} ({songsA3[3]?.section})</h3>
                  <h3> >> {songsA3[4]?.artist} - {songsA3[4]?.song} ({songsA3[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>


            {/* Chord B */}
            <Route path="/ChordB">
              <div className="content">
                <div className="chords"> 
                <h2> Ótima escolha! </h2>
                  <div className="textWithChord">
                    <h3> Essas são as combinações mais prováveis usando o acorde </h3>
                    <ChordsButtonSelected variant="contained">B</ChordsButtonSelected> 
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A primeira combinação mais provável ({dictB.first[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-B-C-B-C" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictB.first[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictB.first[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.first[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.first[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A segunda combinação mais provável ({dictB.second[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-B-E-Am-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictB.second[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictB.second[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.second[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.second[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  
                  <div className="chordsButton3">
                    <h4> A terceira combinação mais provável ({dictB.third[4]}), será: </h4>
                    <div className="groupByProbability">
                      <Link to="/songs-with-B-Em-C-G" style={{ textDecoration: 'none' }}> 
                      <ChordsButton variant="contained">{dictB.third[0]}</ChordsButton> 
                      <ChordsButton variant="contained">{dictB.third[1]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.third[2]}</ChordsButton>
                      <ChordsButton variant="contained">{dictB.third[3]}</ChordsButton>
                      </Link>
                      <FavoriteButton onClick={() => { alert('Favoritado!') }} variant="contained" fontSize="small">❤</FavoriteButton> 

                    </div>
                  </div>
                  <h5> Clicando em alguma combinação, você poderá ver as músicas que também a utilizam. </h5>

                </div> 
              </div>
            </Route>

            <Route path="/songs-with-B-C-B-C"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação B-C-B-C </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsB1[0]?.artist} - {songsB1[0]?.song} ({songsB1[0]?.section})</h3>
                  <h3> >> {songsB1[1]?.artist} - {songsB1[1]?.song} ({songsB1[1]?.section})</h3>
                  <h3> >> {songsB1[2]?.artist} - {songsB1[2]?.song} ({songsB1[2]?.section})</h3>
                  <h3> >> {songsB1[3]?.artist} - {songsB1[3]?.song} ({songsB1[3]?.section})</h3>
                  <h3> >> {songsB1[4]?.artist} - {songsB1[4]?.song} ({songsB1[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-B-E-Am-G"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação B-E-Am-G </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsB2[0]?.artist} - {songsB2[0]?.song} ({songsB2[0]?.section})</h3>
                  <h3> >> {songsB2[1]?.artist} - {songsB2[1]?.song} ({songsB2[1]?.section})</h3>
                  <h3> >> {songsB2[2]?.artist} - {songsB2[2]?.song} ({songsB2[2]?.section})</h3>
                  <h3> >> {songsB2[3]?.artist} - {songsB2[3]?.song} ({songsB2[3]?.section})</h3>
                  <h3> >> {songsB2[4]?.artist} - {songsB2[4]?.song} ({songsB2[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>
            <Route path="/songs-with-B-Em-C-G"> 
              <div className="content">
                <div className="chords">
                  <h2> Essas são as músicas com a combinação B-Em-C-G </h2>
                  <h4> Caso demore para aparecer os resultados, aguarde mais alguns segundos </h4>
                
                  <h3> >> {songsB3[0]?.artist} - {songsB3[0]?.song} ({songsB3[0]?.section})</h3>
                  <h3> >> {songsB3[1]?.artist} - {songsB3[1]?.song} ({songsB3[1]?.section})</h3>
                  <h3> >> {songsB3[2]?.artist} - {songsB3[2]?.song} ({songsB3[2]?.section})</h3>
                  <h3> >> {songsB3[3]?.artist} - {songsB3[3]?.song} ({songsB3[3]?.section})</h3>
                  <h3> >> {songsB3[4]?.artist} - {songsB3[4]?.song} ({songsB3[4]?.section})</h3>

                </div>
              </div>
              <Link to="/Main" style={{ textDecoration: 'none' }}> <MainButton fontSize="small" variant="contained">Home</MainButton> </Link>

            </Route>

          </BrowserRouter>
        </div>
  );
}

export default App;