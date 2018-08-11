/**
 * @ContributorsList
 * @Inateno / http://inateno.com / http://dreamirl.com
 *
 * this is the inputs list sample that will be loaded by the project
 * Please declare in the same way than this example.
 */

define( [],
function()
{
  var inputs = {
    "left":{"keycodes":[ "K.left" , 'K.a', 'K.q' ] }
    ,"right":{"keycodes":[ "K.right" , 'K.d' ] }
    ,"up":{"keycodes":[ "K.up" , 'K.z', 'K.w' ] }
    ,"down":{"keycodes":[ "K.down" , 'K.s' ] }
    ,"jump":{"keycodes":[ 'G0.B.A', "K.space" ], "stayOn": true }
    
    ,"action":{"keycodes":[ "K.space" , 'G0.B.A' ]/*, "interval": 100*/ }
    ,"switch-mode":{"keycodes":[ "K.ctrl" , 'G0.B.B' ]/*, "interval": 100*/ }
    
    ,"haxe":{"keycodes":[ "G0.A.LHorizontal" ] }
    ,"vaxe":{"keycodes":[ "G0.A.LVertical" ] }
  };
  
  return inputs;
} );