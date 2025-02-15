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
        let selectedExercises = getRandomExercises(arms, 1);
        workoutHTML += `<h4>Set ${i}:</h4><ul style="list-style-type:square">`;


        selectedExercises.forEach(exercise => {
            workoutHTML += `<li>${exercise}</li>`;
        });

        selectedExercises = getRandomExercises(legs, 1);
        selectedExercises.forEach(exercise => {
            workoutHTML += `<li>${exercise}</li>`;
        });

        selectedExercises = getRandomExercises(core, 1);
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


/*

tatic void Print7x()
    {
        List<string> arms = new List<string>() {"Pushup Pull Throughs", "Flappy Birds", "Plank Pushups", "Tricep Dips", "Standing Triceps", "Burpees", "Burpees"};
        List<string> abs = new List<string>()  {"Crunchy Frogs", "Fifer Scissors", "Leg Lifts", "Reverse Crunches", "Bicycles", "Roll Up V Ups", "Russian Twists"};
        List<string> legs = new List<string>() {"Kettlebell Swings", "Lunge Uppercuts", "Jump Lunges", "Jump Squats", "Mountain Climbers", "Squat Shuffle", "Stir the Pot"};

        string s = "";
        for (int i = 0; i < 7; i++)
        {
            s += "set: " + (i + 1) + System.Environment.NewLine;
            string a = arms[UnityEngine.Random.Range(0, arms.Count)];
            arms.Remove(a);
            string b = abs[UnityEngine.Random.Range(0, abs.Count)];
            abs.Remove(b);
            string c = legs[UnityEngine.Random.Range(0, legs.Count)];
            legs.Remove(c);

            List<string> set = new List<string>() {a, b, c};
            set.Shuffle();
            for (int j = 0; j < set.Count; j++)
            {
                s += set[j];
                s += System.Environment.NewLine;
            }
            if (i < 6) s+= System.Environment.NewLine;
        }

        s += "\n maybe consider stretching afterwards"; 
        Debug.Log(s);
    }

    */
