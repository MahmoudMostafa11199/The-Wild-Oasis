import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://xiqpgvlhwutgobphnklp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpcXBndmxod3V0Z29icGhua2xwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5NDgwOTgsImV4cCI6MjA0MDUyNDA5OH0.xGGlUwyp03IcCXiw1sDLK_YC_m0RflPCnJcPFcwbS3s';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
