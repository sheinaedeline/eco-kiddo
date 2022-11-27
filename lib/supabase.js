import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

// console.log("hi", process.env.SUPABASE_URL);
const supabaseUrl = "https://vfqudapdffqyowbksggv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmcXVkYXBkZmZxeW93YmtzZ2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzMDIwNTIsImV4cCI6MTk4Mzg3ODA1Mn0.jpJNKfuLQTA60eeNkIC_Jj_CvqRDuRc1yCxNxHvL96I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
