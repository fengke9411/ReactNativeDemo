package com.test2;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;


/**
 * Copyright (C), 2015-2016, 苏宁消费金融公司
 * Author: fengkeke(10160320@sncfc.com.cn)
 * Date:     2016/11/28 17:49
 * Description: //模块目的、功能描述
 * History: //修改记录
 * 修改人姓名             修改时间            版本号                  描述
 */
public class SimpleActivity extends Activity{
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        final String data = getIntent().getStringExtra("params");
        TextView textView = new TextView(this);
        textView.setText("来自js的消息"+data);
        textView.setTextSize(40);
        textView.setTextColor(Color.RED);
        setContentView(textView);

        textView.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent();
                intent.putExtra("result","result"+data);

                setResult(RESULT_OK,intent);
                finish();

            }
        });

    }
}
