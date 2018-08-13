package com.e4education;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.calendarevents.CalendarEventsPackage;

import org.devio.rn.splashscreen.SplashScreen;
import org.devio.rn.splashscreen.SplashScreenReactPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "E4education";
    }
    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        CalendarEventsPackage.onRequestPermissionsResult(requestCode, permissions, grantResults);

    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);

//        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }

}

