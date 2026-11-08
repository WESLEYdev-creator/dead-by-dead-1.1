// Rode depois de "npx cap add android": força modo horizontal, tela cheia imersiva e área de recorte (notch).
const fs=require('fs'),path=require('path');const base='android/app/src/main';
const mf=path.join(base,'AndroidManifest.xml');let m=fs.readFileSync(mf,'utf8');
if(!m.includes('screenOrientation'))m=m.replace('<activity','<activity android:screenOrientation="sensorLandscape"');
fs.writeFileSync(mf,m);
const st=path.join(base,'res/values/styles.xml');let x=fs.readFileSync(st,'utf8');
if(!x.includes('windowLayoutInDisplayCutoutMode'))x=x.replace(/(<style name="AppTheme.NoActionBar"[^>]*>)/,'$1\n        <item name="android:windowLayoutInDisplayCutoutMode">shortEdges</item>');
fs.writeFileSync(st,x);
const dir=path.join(base,'java/com/deadbydead/game');fs.mkdirSync(dir,{recursive:true});
fs.writeFileSync(path.join(dir,'MainActivity.java'),`package com.deadbydead.game;
import android.os.Bundle;import android.view.View;import android.view.WindowManager;import com.getcapacitor.BridgeActivity;
public class MainActivity extends BridgeActivity{
 @Override public void onCreate(Bundle b){super.onCreate(b);getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);hide();}
 @Override public void onWindowFocusChanged(boolean f){super.onWindowFocusChanged(f);if(f)hide();}
 void hide(){getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE|View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION|View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN|View.SYSTEM_UI_FLAG_HIDE_NAVIGATION|View.SYSTEM_UI_FLAG_FULLSCREEN|View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);}
}
`);
console.log('Android configurado: horizontal + imersivo.');
