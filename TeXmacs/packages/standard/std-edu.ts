<TeXmacs|1.99.8>

<style|<tuple|source|std>>

<\body>
  <active*|<\src-title>
    <src-package|std-edu|1.0>

    <\src-purpose>
      Standard educational macros.
    </src-purpose>

    <src-copyright|2019|Joris van der Hoeven>

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
    </src-license>
  </src-title>>

  <\active*>
    <\src-comment>
      Customuzations of standard environments.
    </src-comment>
  </active*>

  <assign|render-exercise|<\macro|which|body>
    <\padded*>
      <surround|<exercise-name|<arg|which><exercise-sep>>||<arg|body>>
    </padded*>
  </macro>>
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
    <associate|src-special|normal>
  </collection>
</initial>