package com.test2;

import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

import java.util.Map;

/**
 * Copyright (C), 2015-2016, 苏宁消费金融公司
 * Author: fengkeke(10160320@sncfc.com.cn)
 * Date:     2016/11/28 17:35
 * Description: //模块目的、功能描述
 * History: //修改记录
 * 修改人姓名             修改时间            版本号                  描述
 */
public class IntentModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME="IntentModule";
    private static final String RESULT_OK="RESULT_OK";
    private static final String RESULT_CANCEL="RESULT_CANCEL";
    private static final String RESULT_ERROR="RESULT_ERROR";
    private static final int REQUEST_CODE = 1;
    private Promise mPromise;
    private ProgressDialog mProgressDialog;


    private final ActivityEventListener mActivityEventListener = new ActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {

            Log.d("IntentModule","requestCode = "+requestCode+"     resultCode = "+resultCode);
            if (mPromise==null){
                return;
            }
            if (resultCode==Activity.RESULT_OK){
//                mPromise.reject(RESULT_OK,"RESULT_OK");
                WritableMap map = Arguments.createMap();
                map.putString("code",RESULT_OK);
                map.putString("msg",RESULT_OK);
                mPromise.resolve(map);
            }else {
                mPromise.reject(RESULT_CANCEL,"RESULT_CANCEL");
            }
            mPromise = null;
        }

        @Override
        public void onNewIntent(Intent intent) {

        }
    };


    public IntentModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(mActivityEventListener);
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void startActivityFromJS(String actyName,String params){
        Activity activity = getCurrentActivity();
        try {
        if (activity!=null){
            Class toActivity = Class.forName(actyName);
            Intent intent = new Intent(activity,toActivity);
            intent.putExtra("params",params);
            activity.startActivity(intent);
        }

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    @ReactMethod
    public void startActivityFromJsforResult(String actName, Promise promise){
        this.mPromise = promise;
        Activity activity = getCurrentActivity();
        try {
            if (activity!=null){
                Class toActivity = Class.forName(actName);
                Intent intent = new Intent(activity,toActivity);
                activity.startActivityForResult(intent,REQUEST_CODE);
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            promise.reject(RESULT_ERROR,RESULT_ERROR);
        }
    }


    @ReactMethod
    public void showLoading(){
//        mProgressDialog = new ProgressDialog(getReactApplicationContext());
//        if (mProgressDialog!=null) {
//            getReactApplicationContext().runOnUiQueueThread(new Runnable() {
//                @Override
//                public void run() {
//                    mProgressDialog.show();
//                }
//            });
//        }

        Toast.makeText(getReactApplicationContext(),"toast",Toast.LENGTH_LONG).show();
    }

    @ReactMethod
    public void dismissLoading(){
        if (mProgressDialog!=null) {
            getReactApplicationContext().runOnUiQueueThread(new Runnable() {
                @Override
                public void run() {
                    mProgressDialog.dismiss();
                }
            });

        }
    }


}
