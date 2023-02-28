#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use std::thread;
use std::thread::sleep;
use std::time::{Instant, Duration };

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn start(start: bool) -> u64{

    format!("DZIAŁA {}", start);
    println!("{}", start);
    let seconds = thread::spawn(seconds);
    // seconds();
    return seconds.join().unwrap();
    return 1232131
}
fn seconds() -> u64 {
    let mut a = 0;

    loop {
sleep(Duration::from_secs(1));
a += 1;
println!("{}", a);

    }
    return a;
}
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![start])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
