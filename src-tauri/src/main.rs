#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::time::{Instant, Duration };

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn start(start: bool) -> bool {
    format!("DZIAŁA {}", start);
    println!("{}", start);
    if start == true {
        return false
    } else {

        return true
    }


}
#[tauri::command]
fn timer(start: bool) -> Duration {
    let now = Instant::now();
    format!("DZIAŁA / timer");
    if start == true {
return Duration::new(0, 0);
    } else {
        return now.elapsed()
    }
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![start, timer])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
