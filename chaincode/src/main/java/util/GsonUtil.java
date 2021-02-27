package util;
//import com.google.gson.Gson;

import com.google.gson.Gson;

public class GsonUtil {

    public static String toJson(Object obj) {
        return new Gson().toJson(obj);
    }

    public static <T> T fromJson(String json, Class<T> any) {
        return new Gson().fromJson(json, any);
    }
}
