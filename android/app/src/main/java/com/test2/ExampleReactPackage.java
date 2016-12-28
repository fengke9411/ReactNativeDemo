package com.test2;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * Copyright (C), 2015-2016, 苏宁消费金融公司
 * Author: fengkeke(10160320@sncfc.com.cn)
 * Date:     2016/11/28 17:58
 * Description: //模块目的、功能描述
 * History: //修改记录
 * 修改人姓名             修改时间            版本号                  描述
 */
public class ExampleReactPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {


        return Arrays.<NativeModule>asList(new IntentModule(reactContext));
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {

        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
