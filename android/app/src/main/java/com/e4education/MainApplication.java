package com.e4education;

import android.app.Application;

import com.facebook.react.ReactApplication;
import org.devio.rn.splashscreen.SplashScreenReactPackage;


//import com.kishanjvaghela.cardview.RNCardViewPackage;
//import com.horcrux.svg.SvgPackage;
//import com.github.alinz.reactnativewebviewbridge.WebViewBridgePackage;
import com.calendarevents.CalendarEventsPackage;
//import com.reactnative.photoview.PhotoViewPackage;
//import com.chirag.RNMail.RNMail;
import com.oblador.vectoricons.VectorIconsPackage;
import io.realm.react.RealmReactPackage;
//import com.arttitude360.reactnative.rngoogleplaces.RNGooglePlacesPackage;
import com.devfd.RNGeocoder.RNGeocoderPackage;
import com.showlocationservicesdialogbox.LocationServicesDialogBoxPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SplashScreenReactPackage(),
//            new RNCardViewPackage(),
//            new SvgPackage(),
//            new WebViewBridgePackage(),
            new CalendarEventsPackage(),
//            new PhotoViewPackage(),
//            new RNMail(),
            new VectorIconsPackage(),
            new RealmReactPackage(),
//            new RNGooglePlacesPackage(),
            new RNGeocoderPackage(),
            new LocationServicesDialogBoxPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
