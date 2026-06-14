# Performance Analyst Research — George Ashwell (CrossFit Metrics) + Benchmarking Science

> **Persona: Ashwell (Performance Analyst)**
> Anchored on George Ashwell's CrossFit testing methodology + data-driven progress tracking.

---

## George Ashwell — Performance Testing Approach

### CrossFit Benchmark Philosophy
CrossFit-derived testing uses **repeatable benchmark workouts** to measure progress objectively. Ashwell's approach with Holland: periodic retesting of standard workouts to track improvement.

### Key Metrics for the Spartan-Spider Programme

**1. Friday 300 Time (Primary Benchmark)**
The single most important metric. Complete the 300 circuit as fast as possible with good form. Track time weekly. This is the equivalent of the original Gym Jones 300 test that actors had to pass.

Current 300 structure:
- 500m row → 25 DB deadlift → 50 push-ups → 25 tuck jumps → 25 floor wipers → 25 KB clean & press → 25 goblet squat → 25 renegade row → 25 reverse lunge → 15 burpees → 25 KB swing → 15 ball slams → 60s hollow hold → 500m row
- Total: ~340+ reps

**2. Rowing Splits**
- 500m time (sprint benchmark)
- 2,000m time (endurance benchmark)
- Tuesday pyramid total time
- Track improvement over 4-week cycles

**3. Weight Progression**
For each exercise, track:
- Weight used (DB or KB)
- Reps completed
- Volume load = weight × reps × sets
- Progressive overload: add 1 rep/set OR move up 1 DB increment every 2 weeks

**4. Body Composition**
- Weight (monthly, same conditions)
- Waist measurement (monthly, most reliable fat-loss indicator)
- "Feel" score (1-10, subjective but useful for trend-spotting)
- Photos (optional, same pose/lighting monthly)

**5. Conditioning Markers**
- Resting heart rate (lower = fitter)
- Recovery time between sets (subjective: "recovered faster today")
- EMOM completion rate (Tuesday: did you finish all reps within each minute?)

---

## Data Analysis Frameworks

### Trend Analysis
Never judge a single data point. The question is always: **"What's the 4-week trend?"**

| Metric | Good Trend | Warning Trend | Action |
|--------|-----------|---------------|--------|
| Friday 300 time | Getting faster | Plateau or slower | Review programme phase, check recovery |
| Weights used | Progressing up | Stuck at same weight 3+ weeks | Tempo manipulation, deload then push |
| Body weight | Stable or slight decrease (recomp) | Rapid loss or gain | Check nutrition compliance |
| Waist measurement | Decreasing | Increasing | Calorie audit needed |
| Feel score | 7+ average | Consistently <6 | Overtraining risk, check sleep/recovery |

### Volume Load Tracking
Volume load = total weight lifted per session (weight × reps × sets for each exercise, summed).

This is the most objective measure of training progress. A session where you lifted 3,200kg total volume is measurably harder than one at 2,800kg — regardless of how it "felt."

### The 4-Week Review Cycle
Every 4 weeks, Ashwell produces a data summary:
1. Friday 300 time trend (4 data points)
2. Key exercise weight progression
3. Body metrics change
4. Nutrition compliance rate (days tracked / total days)
5. Sessions completed vs. planned
6. Recommendation: continue current phase or transition

---

## CrossFit Testing Protocols Relevant to Home Gym

### Benchmark WODs Adapted for Adam's Equipment
- **"Fran" adapted**: 21-15-9 of DB thrusters + burpees (for time)
- **"Helen" adapted**: 3 rounds of 400m run + 21 KB swings + 12 push-ups (for time)
- **"Cindy" adapted**: 20-min AMRAP of 5 inverted rows + 10 push-ups + 15 air squats

These can serve as additional benchmarks tested every 4-8 weeks.

### EMOM Testing
Tuesday's EMOM (12 minutes, 3 exercises rotating) tracks:
- Did you complete all prescribed reps within each minute?
- Did you have rest time remaining?
- Over weeks, does rest time increase (= fitter)?

### AMRAP Testing
Set a timer, count total rounds. Compare to previous test.

---

## Data Sources for This Persona

### From the 300 PWA App (via Gist sync)
- `workouts[]` — each workout logged with exercises, sets, reps, weights
- `nutrition[]` — daily meal logging with calories, protein, carbs, fat
- Friday 300 time (if recorded as a timed workout)

### From Manual Input (Progress/ vault files)
- Body Metrics.md — monthly weight + waist
- Friday 300 Times.md — weekly benchmark time

### Calculated Metrics
- Weekly training volume (sum of volume load across all sessions)
- Macro compliance rate (days where protein target met / total days)
- Session completion rate (sessions logged / sessions planned)
- Progressive overload rate (exercises where weight increased this cycle)

---

## Key Principles from Waterson
> *"Don't rely on hearsay — have the facts & use the science."*

Data without interpretation is noise. This persona always answers: **"What does the data actually say, and what should you do about it?"**

---

## Sources
- George Ashwell: CrossFit methodology (multiple fitness publications, cross-referenced)
- CrossFit.com: benchmark WOD standards
- simonwaterson.com: data-driven philosophy (verified direct)
- Twight/Outside Online: testing protocols (verified direct)

---

## Harvest Append — 2026-06-06

### Jeff Nippard's Muscle Lab — Data-Driven Training Science Facility ([June 2026](https://boxlifemagazine.com/most-scientific-gym/))
**Source:** BoxLife Magazine / Jeff Nippard YouTube
**Persona relevance:** Ashwell (Performance Analyst), Waterson (Programme Architect)

**Key insights:**
- Nippard has built a hybrid gym + research facility ("Muscle Lab") equipped with DEXA scans, EMG, and ultrasound
- Enables real-time, data-driven training insights — validates exercise selection and technique cues with empirical measurement rather than subjective assessment
- Blends peer-reviewed exercise science with practical gym application in content format
- Reinforces Ashwell's philosophy: "What does the data actually say?" — Nippard is operationalising this at scale

**New frameworks/techniques:**
- EMG-validated exercise ranking: overhead dumbbell extensions showed ~1.4× greater triceps activation across all three heads vs. skullcrushers and close-grip bench press
- Real-time DEXA body composition tracking for content validation — a model for how Adam could structure periodic body composition checks

**Conflict with existing material:** None — extends Ashwell's metrics-driven approach with concrete examples of measurement technology application
