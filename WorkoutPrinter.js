document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateWorkout").addEventListener("click", generateWorkout);
});

function generateWorkout() {
    const sets = parseInt(document.getElementById("sets").value);
    const duration = parseInt(document.getElementById("duration").value);
    const workoutPlanDiv = document.getElementById("workoutPlan");

    if (isNaN(sets) || sets < 1 || isNaN(duration) || duration < 10) {
        workoutPlanDiv.innerHTML = "<p>Please enter valid numbers for sets and duration.</p>";
        return;
    }

    const arms = ["Sit-ups", "Push-ups", "Squats", "Back Flips", "Dips", "Twists", "Lunges", "Planks", "Jumping Jacks", "Burpees"];
    const legs = ["Sit-ups", "Push-ups", "Squats", "Back Flips", "Dips", "Twists", "Lunges", "Planks", "Jumping Jacks", "Burpees"];
    const core = ["Sit-ups", "Push-ups", "Squats", "Back Flips", "Dips", "Twists", "Lunges", "Planks", "Jumping Jacks", "Burpees"];
    
    let workoutHTML = "";
    
    for (let i = 1; i <= sets; i++) {
        let selectedExercises = getRandomExercises(exercises, 3);
        workoutHTML += `<h4>Set ${i} (${duration} sec):</h4><ul>`;
        selectedExercises.forEach(exercise => {
            workoutHTML += `<li>${exercise}</li>`;
        });
        workoutHTML += `</ul>`;
    }

    workoutPlanDiv.innerHTML = workoutHTML;
}

function getRandomExercises(exerciseList, num) {
    let shuffled = [...exerciseList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}
