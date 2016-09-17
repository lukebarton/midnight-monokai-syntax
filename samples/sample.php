<?php

namespace Illuminate\Container;

use Closure;
use ArrayAccess;

/**
 * Theme: Grunge Contrast
 * Grunge.
 *
 * Copyright (c) 2014 Dayle Rees
 */
class Container implements ArrayAccess
{
    /**
     * An array of the types that have been resolved.
     *
     * @var array
     */
    protected $resolved = array();

    /**
     * Determine if a given type is shared.
     *
     * @param  string  $abstract
     * @return bool
     */
    public function isShared($abstract)
    {
        if (isset($this->bindings[$abstract]['shared']))
        {
            $shared = $this->bindings[$abstract]['shared'];
            $this->foobar();
        } else {
            $shared = false;
        }

        return isset($this->instances[$abstract]) || $shared === true;
    }

}
