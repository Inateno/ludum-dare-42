// /**
// * Author
//  @Inateno / http://inateno.com / http://dreamirl.com

// * ContributorsList
//  @Inateno

// ***
// * @constructor
// * main.js
// - load all customs files
// add your files here but don't remove DREAM_ENGINE

// -- problem with require.js ? give a look on api doc --> http://requirejs.org/docs/api.html#jsfiles
// **/
require.config( {
  baseUrl: "./src/"
  , paths: {
    "jquery"       : "../libs/jquery"
    , "backbone"   : "../libs/backbone"
    , "underscore" : "../libs/underscore"
    , "particles"  : "../libs/pixi-particles"
    
    ,'DREAM_ENGINE'    : '../libs/Dreamengine.amd'
    ,'DE.NebulaOffline': '../plugins/NebulaOffline/index'
    ,'SheetRenderer'  : 'evol-engine/SheetRenderer'
    
    ,'Game'  : 'Game'
    ,'config': 'game/config'
    ,'Player': 'game/Player'
    // ,'lazzyChunk'
    
    // ,'DE.TouchControl' : 'plugins/TouchControl'
    
    // custom data
    ,'inputs'      : '../data/inputs'
    ,'audios'      : '../data/audios'
    ,'dictionary'  : '../data/dictionary'
    ,'achievements': '../data/achievements'
    ,'images'      : '../data/images'
  }
  , urlArgs: 'bust=' + Date.now()
} );

// // init here your game with your code by using the Engine (as DE)
require( [ 'DREAM_ENGINE', 'Game', 'inputs', 'audios', 'dictionary', 'images', 'achievements' ],
function( DE, Game, inputs, audios, dictionary, images, achievements )
{
  console.log( "game main file loaded DREAM_ENGINE:" , DE );
  
  DE.init(
  {
    'onReady'              : Game.init
    , 'onLoad'             : Game.onload
    , 'inputs'             : inputs
    , 'audios'             : audios
    , 'dictionary'         : dictionary
    , 'images'             : images
    , 'achievements'       : achievements
    , 'about': { 'gameName': "Engine Dev Game 1", "namespace": "noting", 'author': "Inateno", 'gameVersion': "0.1" }
    , 'saveModel': { "nShoots": 0 }, 'saveIgnoreVersion': true
    // , 'loader': { interval: 10, scale: 2 }
  } );
} );